# `dataOciOspGatewayInvoices` Submodule <a name="`dataOciOspGatewayInvoices` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOspGatewayInvoices <a name="DataOciOspGatewayInvoices" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices oci_osp_gateway_invoices}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoices(
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
  osp_home_region: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOspGatewayInvoicesFilter]] = None,
  id: str = None,
  invoice_id: str = None,
  search_text: str = None,
  status: typing.List[str] = None,
  time_invoice_end: str = None,
  time_invoice_start: str = None,
  time_payment_end: str = None,
  time_payment_start: str = None,
  type: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#compartment_id DataOciOspGatewayInvoices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#osp_home_region DataOciOspGatewayInvoices#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#id DataOciOspGatewayInvoices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.invoiceId">invoice_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#invoice_id DataOciOspGatewayInvoices#invoice_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.searchText">search_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#search_text DataOciOspGatewayInvoices#search_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.status">status</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#status DataOciOspGatewayInvoices#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.timeInvoiceEnd">time_invoice_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_end DataOciOspGatewayInvoices#time_invoice_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.timeInvoiceStart">time_invoice_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_start DataOciOspGatewayInvoices#time_invoice_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.timePaymentEnd">time_payment_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_end DataOciOspGatewayInvoices#time_payment_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.timePaymentStart">time_payment_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_start DataOciOspGatewayInvoices#time_payment_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.type">type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#type DataOciOspGatewayInvoices#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#compartment_id DataOciOspGatewayInvoices#compartment_id}.

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.ospHomeRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#osp_home_region DataOciOspGatewayInvoices#osp_home_region}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#filter DataOciOspGatewayInvoices#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#id DataOciOspGatewayInvoices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invoice_id`<sup>Optional</sup> <a name="invoice_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.invoiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#invoice_id DataOciOspGatewayInvoices#invoice_id}.

---

##### `search_text`<sup>Optional</sup> <a name="search_text" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.searchText"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#search_text DataOciOspGatewayInvoices#search_text}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.status"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#status DataOciOspGatewayInvoices#status}.

---

##### `time_invoice_end`<sup>Optional</sup> <a name="time_invoice_end" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.timeInvoiceEnd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_end DataOciOspGatewayInvoices#time_invoice_end}.

---

##### `time_invoice_start`<sup>Optional</sup> <a name="time_invoice_start" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.timeInvoiceStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_start DataOciOspGatewayInvoices#time_invoice_start}.

---

##### `time_payment_end`<sup>Optional</sup> <a name="time_payment_end" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.timePaymentEnd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_end DataOciOspGatewayInvoices#time_payment_end}.

---

##### `time_payment_start`<sup>Optional</sup> <a name="time_payment_start" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.timePaymentStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_start DataOciOspGatewayInvoices#time_payment_start}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.type"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#type DataOciOspGatewayInvoices#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetInvoiceId">reset_invoice_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetSearchText">reset_search_text</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimeInvoiceEnd">reset_time_invoice_end</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimeInvoiceStart">reset_time_invoice_start</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimePaymentEnd">reset_time_payment_end</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimePaymentStart">reset_time_payment_start</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOspGatewayInvoicesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_invoice_id` <a name="reset_invoice_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetInvoiceId"></a>

```python
def reset_invoice_id() -> None
```

##### `reset_search_text` <a name="reset_search_text" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetSearchText"></a>

```python
def reset_search_text() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_time_invoice_end` <a name="reset_time_invoice_end" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimeInvoiceEnd"></a>

```python
def reset_time_invoice_end() -> None
```

##### `reset_time_invoice_start` <a name="reset_time_invoice_start" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimeInvoiceStart"></a>

```python
def reset_time_invoice_start() -> None
```

##### `reset_time_payment_end` <a name="reset_time_payment_end" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimePaymentEnd"></a>

```python
def reset_time_payment_end() -> None
```

##### `reset_time_payment_start` <a name="reset_time_payment_start" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimePaymentStart"></a>

```python
def reset_time_payment_start() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOspGatewayInvoices resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOspGatewayInvoices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOspGatewayInvoices to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOspGatewayInvoices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOspGatewayInvoices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList">DataOciOspGatewayInvoicesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceCollection">invoice_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList">DataOciOspGatewayInvoicesInvoiceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceIdInput">invoice_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.ospHomeRegionInput">osp_home_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.searchTextInput">search_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.statusInput">status_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceEndInput">time_invoice_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceStartInput">time_invoice_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentEndInput">time_payment_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentStartInput">time_payment_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.typeInput">type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceId">invoice_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.searchText">search_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.status">status</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceEnd">time_invoice_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceStart">time_invoice_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentEnd">time_payment_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentStart">time_payment_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.type">type</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.filter"></a>

```python
filter: DataOciOspGatewayInvoicesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList">DataOciOspGatewayInvoicesFilterList</a>

---

##### `invoice_collection`<sup>Required</sup> <a name="invoice_collection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceCollection"></a>

```python
invoice_collection: DataOciOspGatewayInvoicesInvoiceCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList">DataOciOspGatewayInvoicesInvoiceCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOspGatewayInvoicesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `invoice_id_input`<sup>Optional</sup> <a name="invoice_id_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceIdInput"></a>

```python
invoice_id_input: str
```

- *Type:* str

---

##### `osp_home_region_input`<sup>Optional</sup> <a name="osp_home_region_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.ospHomeRegionInput"></a>

```python
osp_home_region_input: str
```

- *Type:* str

---

##### `search_text_input`<sup>Optional</sup> <a name="search_text_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.searchTextInput"></a>

```python
search_text_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.statusInput"></a>

```python
status_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_invoice_end_input`<sup>Optional</sup> <a name="time_invoice_end_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceEndInput"></a>

```python
time_invoice_end_input: str
```

- *Type:* str

---

##### `time_invoice_start_input`<sup>Optional</sup> <a name="time_invoice_start_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceStartInput"></a>

```python
time_invoice_start_input: str
```

- *Type:* str

---

##### `time_payment_end_input`<sup>Optional</sup> <a name="time_payment_end_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentEndInput"></a>

```python
time_payment_end_input: str
```

- *Type:* str

---

##### `time_payment_start_input`<sup>Optional</sup> <a name="time_payment_start_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentStartInput"></a>

```python
time_payment_start_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.typeInput"></a>

```python
type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `invoice_id`<sup>Required</sup> <a name="invoice_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceId"></a>

```python
invoice_id: str
```

- *Type:* str

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.ospHomeRegion"></a>

```python
osp_home_region: str
```

- *Type:* str

---

##### `search_text`<sup>Required</sup> <a name="search_text" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.searchText"></a>

```python
search_text: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.status"></a>

```python
status: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_invoice_end`<sup>Required</sup> <a name="time_invoice_end" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceEnd"></a>

```python
time_invoice_end: str
```

- *Type:* str

---

##### `time_invoice_start`<sup>Required</sup> <a name="time_invoice_start" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceStart"></a>

```python
time_invoice_start: str
```

- *Type:* str

---

##### `time_payment_end`<sup>Required</sup> <a name="time_payment_end" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentEnd"></a>

```python
time_payment_end: str
```

- *Type:* str

---

##### `time_payment_start`<sup>Required</sup> <a name="time_payment_start" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentStart"></a>

```python
time_payment_start: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.type"></a>

```python
type: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOspGatewayInvoicesConfig <a name="DataOciOspGatewayInvoicesConfig" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  osp_home_region: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOspGatewayInvoicesFilter]] = None,
  id: str = None,
  invoice_id: str = None,
  search_text: str = None,
  status: typing.List[str] = None,
  time_invoice_end: str = None,
  time_invoice_start: str = None,
  time_payment_end: str = None,
  time_payment_start: str = None,
  type: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#compartment_id DataOciOspGatewayInvoices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#osp_home_region DataOciOspGatewayInvoices#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#id DataOciOspGatewayInvoices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.invoiceId">invoice_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#invoice_id DataOciOspGatewayInvoices#invoice_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.searchText">search_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#search_text DataOciOspGatewayInvoices#search_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.status">status</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#status DataOciOspGatewayInvoices#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timeInvoiceEnd">time_invoice_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_end DataOciOspGatewayInvoices#time_invoice_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timeInvoiceStart">time_invoice_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_start DataOciOspGatewayInvoices#time_invoice_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timePaymentEnd">time_payment_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_end DataOciOspGatewayInvoices#time_payment_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timePaymentStart">time_payment_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_start DataOciOspGatewayInvoices#time_payment_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.type">type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#type DataOciOspGatewayInvoices#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#compartment_id DataOciOspGatewayInvoices#compartment_id}.

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.ospHomeRegion"></a>

```python
osp_home_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#osp_home_region DataOciOspGatewayInvoices#osp_home_region}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOspGatewayInvoicesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#filter DataOciOspGatewayInvoices#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#id DataOciOspGatewayInvoices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invoice_id`<sup>Optional</sup> <a name="invoice_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.invoiceId"></a>

```python
invoice_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#invoice_id DataOciOspGatewayInvoices#invoice_id}.

---

##### `search_text`<sup>Optional</sup> <a name="search_text" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.searchText"></a>

```python
search_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#search_text DataOciOspGatewayInvoices#search_text}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.status"></a>

```python
status: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#status DataOciOspGatewayInvoices#status}.

---

##### `time_invoice_end`<sup>Optional</sup> <a name="time_invoice_end" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timeInvoiceEnd"></a>

```python
time_invoice_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_end DataOciOspGatewayInvoices#time_invoice_end}.

---

##### `time_invoice_start`<sup>Optional</sup> <a name="time_invoice_start" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timeInvoiceStart"></a>

```python
time_invoice_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_start DataOciOspGatewayInvoices#time_invoice_start}.

---

##### `time_payment_end`<sup>Optional</sup> <a name="time_payment_end" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timePaymentEnd"></a>

```python
time_payment_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_end DataOciOspGatewayInvoices#time_payment_end}.

---

##### `time_payment_start`<sup>Optional</sup> <a name="time_payment_start" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timePaymentStart"></a>

```python
time_payment_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_start DataOciOspGatewayInvoices#time_payment_start}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.type"></a>

```python
type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#type DataOciOspGatewayInvoices#type}.

---

### DataOciOspGatewayInvoicesFilter <a name="DataOciOspGatewayInvoicesFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#name DataOciOspGatewayInvoices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#values DataOciOspGatewayInvoices#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#regex DataOciOspGatewayInvoices#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#name DataOciOspGatewayInvoices#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#values DataOciOspGatewayInvoices#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#regex DataOciOspGatewayInvoices#regex}.

---

### DataOciOspGatewayInvoicesInvoiceCollection <a name="DataOciOspGatewayInvoicesInvoiceCollection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollection()
```


### DataOciOspGatewayInvoicesInvoiceCollectionItems <a name="DataOciOspGatewayInvoicesInvoiceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItems()
```


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress()
```


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry()
```


### DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency()
```


### DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOspGatewayInvoicesFilterList <a name="DataOciOspGatewayInvoicesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayInvoicesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOspGatewayInvoicesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>]]

---


### DataOciOspGatewayInvoicesFilterOutputReference <a name="DataOciOspGatewayInvoicesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOspGatewayInvoicesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>]

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.ascii3CountryCode">ascii3_country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryId">country_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryName">country_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.languageId">language_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ascii3_country_code`<sup>Required</sup> <a name="ascii3_country_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.ascii3CountryCode"></a>

```python
ascii3_country_code: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `country_id`<sup>Required</sup> <a name="country_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryId"></a>

```python
country_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `country_name`<sup>Required</sup> <a name="country_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryName"></a>

```python
country_name: str
```

- *Type:* str

---

##### `language_id`<sup>Required</sup> <a name="language_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.languageId"></a>

```python
language_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry</a>

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine1">address_line1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine2">address_line2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine3">address_line3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine4">address_line4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.companyName">company_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.contactName">contact_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.country">country</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.county">county</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.province">province</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.streetName">street_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.streetNumber">street_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_line1`<sup>Required</sup> <a name="address_line1" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine1"></a>

```python
address_line1: str
```

- *Type:* str

---

##### `address_line2`<sup>Required</sup> <a name="address_line2" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine2"></a>

```python
address_line2: str
```

- *Type:* str

---

##### `address_line3`<sup>Required</sup> <a name="address_line3" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine3"></a>

```python
address_line3: str
```

- *Type:* str

---

##### `address_line4`<sup>Required</sup> <a name="address_line4" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine4"></a>

```python
address_line4: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `company_name`<sup>Required</sup> <a name="company_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

---

##### `contact_name`<sup>Required</sup> <a name="contact_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.contactName"></a>

```python
contact_name: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.country"></a>

```python
country: DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList</a>

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.county"></a>

```python
county: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.province"></a>

```python
province: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `street_name`<sup>Required</sup> <a name="street_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.streetName"></a>

```python
street_name: str
```

- *Type:* str

---

##### `street_number`<sup>Required</sup> <a name="street_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.streetNumber"></a>

```python
street_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress</a>

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.currencyCode">currency_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.currencySymbol">currency_symbol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.roundDecimalPoint">round_decimal_point</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.usdConversion">usd_conversion</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency">DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `currency_code`<sup>Required</sup> <a name="currency_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

---

##### `currency_symbol`<sup>Required</sup> <a name="currency_symbol" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.currencySymbol"></a>

```python
currency_symbol: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `round_decimal_point`<sup>Required</sup> <a name="round_decimal_point" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.roundDecimalPoint"></a>

```python
round_decimal_point: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `usd_conversion`<sup>Required</sup> <a name="usd_conversion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.usdConversion"></a>

```python
usd_conversion: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency">DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency</a>

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.accountNumber">account_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.amountPaid">amount_paid</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.cardType">card_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.creditCardType">credit_card_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.echeckRouting">echeck_routing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.lastDigits">last_digits</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.nameOnCard">name_on_card</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paidBy">paid_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paymentMethod">payment_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paypalId">paypal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paypalReference">paypal_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.routingNumber">routing_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.timeExpiration">time_expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.timePaidOn">time_paid_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail">DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_number`<sup>Required</sup> <a name="account_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.accountNumber"></a>

```python
account_number: str
```

- *Type:* str

---

##### `amount_paid`<sup>Required</sup> <a name="amount_paid" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.amountPaid"></a>

```python
amount_paid: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `card_type`<sup>Required</sup> <a name="card_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.cardType"></a>

```python
card_type: str
```

- *Type:* str

---

##### `credit_card_type`<sup>Required</sup> <a name="credit_card_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.creditCardType"></a>

```python
credit_card_type: str
```

- *Type:* str

---

##### `echeck_routing`<sup>Required</sup> <a name="echeck_routing" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.echeckRouting"></a>

```python
echeck_routing: str
```

- *Type:* str

---

##### `last_digits`<sup>Required</sup> <a name="last_digits" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.lastDigits"></a>

```python
last_digits: str
```

- *Type:* str

---

##### `name_on_card`<sup>Required</sup> <a name="name_on_card" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.nameOnCard"></a>

```python
name_on_card: str
```

- *Type:* str

---

##### `paid_by`<sup>Required</sup> <a name="paid_by" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paidBy"></a>

```python
paid_by: str
```

- *Type:* str

---

##### `payment_method`<sup>Required</sup> <a name="payment_method" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paymentMethod"></a>

```python
payment_method: str
```

- *Type:* str

---

##### `paypal_id`<sup>Required</sup> <a name="paypal_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paypalId"></a>

```python
paypal_id: str
```

- *Type:* str

---

##### `paypal_reference`<sup>Required</sup> <a name="paypal_reference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paypalReference"></a>

```python
paypal_reference: str
```

- *Type:* str

---

##### `routing_number`<sup>Required</sup> <a name="routing_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.routingNumber"></a>

```python
routing_number: str
```

- *Type:* str

---

##### `time_expiration`<sup>Required</sup> <a name="time_expiration" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.timeExpiration"></a>

```python
time_expiration: str
```

- *Type:* str

---

##### `time_paid_on`<sup>Required</sup> <a name="time_paid_on" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.timePaidOn"></a>

```python
time_paid_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail">DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail</a>

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsList <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.billToAddress">bill_to_address</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.currency">currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList">DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.internalInvoiceId">internal_invoice_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmount">invoice_amount</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountAdjusted">invoice_amount_adjusted</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountApplied">invoice_amount_applied</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountCredited">invoice_amount_credited</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountDue">invoice_amount_due</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountInDispute">invoice_amount_in_dispute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceId">invoice_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceNumber">invoice_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoicePoNumber">invoice_po_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceRefNumber">invoice_ref_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceStatus">invoice_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceType">invoice_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isCreditCardPayable">is_credit_card_payable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isDisplayDownloadPdf">is_display_download_pdf</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isDisplayViewPdf">is_display_view_pdf</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPaid">is_paid</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPayable">is_payable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPaymentFailed">is_payment_failed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPdfEmailAvailable">is_pdf_email_available</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.lastPaymentDetail">last_payment_detail</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList">DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.partyName">party_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.paymentTerms">payment_terms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.preferredEmail">preferred_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.subscriptionIds">subscription_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.tax">tax</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.timeInvoice">time_invoice</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.timeInvoiceDue">time_invoice_due</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItems">DataOciOspGatewayInvoicesInvoiceCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bill_to_address`<sup>Required</sup> <a name="bill_to_address" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.billToAddress"></a>

```python
bill_to_address: DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList</a>

---

##### `currency`<sup>Required</sup> <a name="currency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.currency"></a>

```python
currency: DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList">DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList</a>

---

##### `internal_invoice_id`<sup>Required</sup> <a name="internal_invoice_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.internalInvoiceId"></a>

```python
internal_invoice_id: str
```

- *Type:* str

---

##### `invoice_amount`<sup>Required</sup> <a name="invoice_amount" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmount"></a>

```python
invoice_amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `invoice_amount_adjusted`<sup>Required</sup> <a name="invoice_amount_adjusted" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountAdjusted"></a>

```python
invoice_amount_adjusted: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `invoice_amount_applied`<sup>Required</sup> <a name="invoice_amount_applied" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountApplied"></a>

```python
invoice_amount_applied: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `invoice_amount_credited`<sup>Required</sup> <a name="invoice_amount_credited" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountCredited"></a>

```python
invoice_amount_credited: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `invoice_amount_due`<sup>Required</sup> <a name="invoice_amount_due" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountDue"></a>

```python
invoice_amount_due: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `invoice_amount_in_dispute`<sup>Required</sup> <a name="invoice_amount_in_dispute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountInDispute"></a>

```python
invoice_amount_in_dispute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `invoice_id`<sup>Required</sup> <a name="invoice_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceId"></a>

```python
invoice_id: str
```

- *Type:* str

---

##### `invoice_number`<sup>Required</sup> <a name="invoice_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceNumber"></a>

```python
invoice_number: str
```

- *Type:* str

---

##### `invoice_po_number`<sup>Required</sup> <a name="invoice_po_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoicePoNumber"></a>

```python
invoice_po_number: str
```

- *Type:* str

---

##### `invoice_ref_number`<sup>Required</sup> <a name="invoice_ref_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceRefNumber"></a>

```python
invoice_ref_number: str
```

- *Type:* str

---

##### `invoice_status`<sup>Required</sup> <a name="invoice_status" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceStatus"></a>

```python
invoice_status: str
```

- *Type:* str

---

##### `invoice_type`<sup>Required</sup> <a name="invoice_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceType"></a>

```python
invoice_type: str
```

- *Type:* str

---

##### `is_credit_card_payable`<sup>Required</sup> <a name="is_credit_card_payable" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isCreditCardPayable"></a>

```python
is_credit_card_payable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_display_download_pdf`<sup>Required</sup> <a name="is_display_download_pdf" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isDisplayDownloadPdf"></a>

```python
is_display_download_pdf: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_display_view_pdf`<sup>Required</sup> <a name="is_display_view_pdf" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isDisplayViewPdf"></a>

```python
is_display_view_pdf: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_paid`<sup>Required</sup> <a name="is_paid" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPaid"></a>

```python
is_paid: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_payable`<sup>Required</sup> <a name="is_payable" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPayable"></a>

```python
is_payable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_payment_failed`<sup>Required</sup> <a name="is_payment_failed" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPaymentFailed"></a>

```python
is_payment_failed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_pdf_email_available`<sup>Required</sup> <a name="is_pdf_email_available" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPdfEmailAvailable"></a>

```python
is_pdf_email_available: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_payment_detail`<sup>Required</sup> <a name="last_payment_detail" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.lastPaymentDetail"></a>

```python
last_payment_detail: DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList">DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList</a>

---

##### `party_name`<sup>Required</sup> <a name="party_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.partyName"></a>

```python
party_name: str
```

- *Type:* str

---

##### `payment_terms`<sup>Required</sup> <a name="payment_terms" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.paymentTerms"></a>

```python
payment_terms: str
```

- *Type:* str

---

##### `preferred_email`<sup>Required</sup> <a name="preferred_email" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.preferredEmail"></a>

```python
preferred_email: str
```

- *Type:* str

---

##### `subscription_ids`<sup>Required</sup> <a name="subscription_ids" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.subscriptionIds"></a>

```python
subscription_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tax`<sup>Required</sup> <a name="tax" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.tax"></a>

```python
tax: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_invoice`<sup>Required</sup> <a name="time_invoice" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.timeInvoice"></a>

```python
time_invoice: str
```

- *Type:* str

---

##### `time_invoice_due`<sup>Required</sup> <a name="time_invoice_due" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.timeInvoiceDue"></a>

```python
time_invoice_due: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayInvoicesInvoiceCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItems">DataOciOspGatewayInvoicesInvoiceCollectionItems</a>

---


### DataOciOspGatewayInvoicesInvoiceCollectionList <a name="DataOciOspGatewayInvoicesInvoiceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewayInvoicesInvoiceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewayInvoicesInvoiceCollectionOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_invoices

dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList">DataOciOspGatewayInvoicesInvoiceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollection">DataOciOspGatewayInvoicesInvoiceCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.items"></a>

```python
items: DataOciOspGatewayInvoicesInvoiceCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList">DataOciOspGatewayInvoicesInvoiceCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewayInvoicesInvoiceCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollection">DataOciOspGatewayInvoicesInvoiceCollection</a>

---



