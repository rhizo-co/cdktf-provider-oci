# `dataOciOspGatewayInvoices` Submodule <a name="`dataOciOspGatewayInvoices` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOspGatewayInvoices <a name="DataOciOspGatewayInvoices" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices oci_osp_gateway_invoices}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoices;

DataOciOspGatewayInvoices.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .ospHomeRegion(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOspGatewayInvoicesFilter>)
//  .id(java.lang.String)
//  .invoiceId(java.lang.String)
//  .searchText(java.lang.String)
//  .status(java.util.List<java.lang.String>)
//  .timeInvoiceEnd(java.lang.String)
//  .timeInvoiceStart(java.lang.String)
//  .timePaymentEnd(java.lang.String)
//  .timePaymentStart(java.lang.String)
//  .type(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#compartment_id DataOciOspGatewayInvoices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.ospHomeRegion">ospHomeRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#osp_home_region DataOciOspGatewayInvoices#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#id DataOciOspGatewayInvoices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.invoiceId">invoiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#invoice_id DataOciOspGatewayInvoices#invoice_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.searchText">searchText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#search_text DataOciOspGatewayInvoices#search_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.status">status</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#status DataOciOspGatewayInvoices#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.timeInvoiceEnd">timeInvoiceEnd</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_end DataOciOspGatewayInvoices#time_invoice_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.timeInvoiceStart">timeInvoiceStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_start DataOciOspGatewayInvoices#time_invoice_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.timePaymentEnd">timePaymentEnd</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_end DataOciOspGatewayInvoices#time_payment_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.timePaymentStart">timePaymentStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_start DataOciOspGatewayInvoices#time_payment_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.type">type</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#type DataOciOspGatewayInvoices#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#compartment_id DataOciOspGatewayInvoices#compartment_id}.

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.ospHomeRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#osp_home_region DataOciOspGatewayInvoices#osp_home_region}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#filter DataOciOspGatewayInvoices#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#id DataOciOspGatewayInvoices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invoiceId`<sup>Optional</sup> <a name="invoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.invoiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#invoice_id DataOciOspGatewayInvoices#invoice_id}.

---

##### `searchText`<sup>Optional</sup> <a name="searchText" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.searchText"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#search_text DataOciOspGatewayInvoices#search_text}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.status"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#status DataOciOspGatewayInvoices#status}.

---

##### `timeInvoiceEnd`<sup>Optional</sup> <a name="timeInvoiceEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.timeInvoiceEnd"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_end DataOciOspGatewayInvoices#time_invoice_end}.

---

##### `timeInvoiceStart`<sup>Optional</sup> <a name="timeInvoiceStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.timeInvoiceStart"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_start DataOciOspGatewayInvoices#time_invoice_start}.

---

##### `timePaymentEnd`<sup>Optional</sup> <a name="timePaymentEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.timePaymentEnd"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_end DataOciOspGatewayInvoices#time_payment_end}.

---

##### `timePaymentStart`<sup>Optional</sup> <a name="timePaymentStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.timePaymentStart"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_start DataOciOspGatewayInvoices#time_payment_start}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.Initializer.parameter.type"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#type DataOciOspGatewayInvoices#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetInvoiceId">resetInvoiceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetSearchText">resetSearchText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimeInvoiceEnd">resetTimeInvoiceEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimeInvoiceStart">resetTimeInvoiceStart</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimePaymentEnd">resetTimePaymentEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimePaymentStart">resetTimePaymentStart</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciOspGatewayInvoicesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetId"></a>

```java
public void resetId()
```

##### `resetInvoiceId` <a name="resetInvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetInvoiceId"></a>

```java
public void resetInvoiceId()
```

##### `resetSearchText` <a name="resetSearchText" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetSearchText"></a>

```java
public void resetSearchText()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeInvoiceEnd` <a name="resetTimeInvoiceEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimeInvoiceEnd"></a>

```java
public void resetTimeInvoiceEnd()
```

##### `resetTimeInvoiceStart` <a name="resetTimeInvoiceStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimeInvoiceStart"></a>

```java
public void resetTimeInvoiceStart()
```

##### `resetTimePaymentEnd` <a name="resetTimePaymentEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimePaymentEnd"></a>

```java
public void resetTimePaymentEnd()
```

##### `resetTimePaymentStart` <a name="resetTimePaymentStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetTimePaymentStart"></a>

```java
public void resetTimePaymentStart()
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOspGatewayInvoices resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoices;

DataOciOspGatewayInvoices.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoices;

DataOciOspGatewayInvoices.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoices;

DataOciOspGatewayInvoices.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoices;

DataOciOspGatewayInvoices.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOspGatewayInvoices.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOspGatewayInvoices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOspGatewayInvoices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOspGatewayInvoices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOspGatewayInvoices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList">DataOciOspGatewayInvoicesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceCollection">invoiceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList">DataOciOspGatewayInvoicesInvoiceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceIdInput">invoiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.ospHomeRegionInput">ospHomeRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.searchTextInput">searchTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.statusInput">statusInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceEndInput">timeInvoiceEndInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceStartInput">timeInvoiceStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentEndInput">timePaymentEndInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentStartInput">timePaymentStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.typeInput">typeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceId">invoiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.ospHomeRegion">ospHomeRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.searchText">searchText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.status">status</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceEnd">timeInvoiceEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceStart">timeInvoiceStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentEnd">timePaymentEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentStart">timePaymentStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.type">type</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.filter"></a>

```java
public DataOciOspGatewayInvoicesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList">DataOciOspGatewayInvoicesFilterList</a>

---

##### `invoiceCollection`<sup>Required</sup> <a name="invoiceCollection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceCollection"></a>

```java
public DataOciOspGatewayInvoicesInvoiceCollectionList getInvoiceCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList">DataOciOspGatewayInvoicesInvoiceCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `invoiceIdInput`<sup>Optional</sup> <a name="invoiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceIdInput"></a>

```java
public java.lang.String getInvoiceIdInput();
```

- *Type:* java.lang.String

---

##### `ospHomeRegionInput`<sup>Optional</sup> <a name="ospHomeRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.ospHomeRegionInput"></a>

```java
public java.lang.String getOspHomeRegionInput();
```

- *Type:* java.lang.String

---

##### `searchTextInput`<sup>Optional</sup> <a name="searchTextInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.searchTextInput"></a>

```java
public java.lang.String getSearchTextInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.statusInput"></a>

```java
public java.util.List<java.lang.String> getStatusInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeInvoiceEndInput`<sup>Optional</sup> <a name="timeInvoiceEndInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceEndInput"></a>

```java
public java.lang.String getTimeInvoiceEndInput();
```

- *Type:* java.lang.String

---

##### `timeInvoiceStartInput`<sup>Optional</sup> <a name="timeInvoiceStartInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceStartInput"></a>

```java
public java.lang.String getTimeInvoiceStartInput();
```

- *Type:* java.lang.String

---

##### `timePaymentEndInput`<sup>Optional</sup> <a name="timePaymentEndInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentEndInput"></a>

```java
public java.lang.String getTimePaymentEndInput();
```

- *Type:* java.lang.String

---

##### `timePaymentStartInput`<sup>Optional</sup> <a name="timePaymentStartInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentStartInput"></a>

```java
public java.lang.String getTimePaymentStartInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.typeInput"></a>

```java
public java.util.List<java.lang.String> getTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `invoiceId`<sup>Required</sup> <a name="invoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.invoiceId"></a>

```java
public java.lang.String getInvoiceId();
```

- *Type:* java.lang.String

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.ospHomeRegion"></a>

```java
public java.lang.String getOspHomeRegion();
```

- *Type:* java.lang.String

---

##### `searchText`<sup>Required</sup> <a name="searchText" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.searchText"></a>

```java
public java.lang.String getSearchText();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.status"></a>

```java
public java.util.List<java.lang.String> getStatus();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeInvoiceEnd`<sup>Required</sup> <a name="timeInvoiceEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceEnd"></a>

```java
public java.lang.String getTimeInvoiceEnd();
```

- *Type:* java.lang.String

---

##### `timeInvoiceStart`<sup>Required</sup> <a name="timeInvoiceStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timeInvoiceStart"></a>

```java
public java.lang.String getTimeInvoiceStart();
```

- *Type:* java.lang.String

---

##### `timePaymentEnd`<sup>Required</sup> <a name="timePaymentEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentEnd"></a>

```java
public java.lang.String getTimePaymentEnd();
```

- *Type:* java.lang.String

---

##### `timePaymentStart`<sup>Required</sup> <a name="timePaymentStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.timePaymentStart"></a>

```java
public java.lang.String getTimePaymentStart();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.type"></a>

```java
public java.util.List<java.lang.String> getType();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoices.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOspGatewayInvoicesConfig <a name="DataOciOspGatewayInvoicesConfig" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoicesConfig;

DataOciOspGatewayInvoicesConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .ospHomeRegion(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOspGatewayInvoicesFilter>)
//  .id(java.lang.String)
//  .invoiceId(java.lang.String)
//  .searchText(java.lang.String)
//  .status(java.util.List<java.lang.String>)
//  .timeInvoiceEnd(java.lang.String)
//  .timeInvoiceStart(java.lang.String)
//  .timePaymentEnd(java.lang.String)
//  .timePaymentStart(java.lang.String)
//  .type(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#compartment_id DataOciOspGatewayInvoices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.ospHomeRegion">ospHomeRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#osp_home_region DataOciOspGatewayInvoices#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#id DataOciOspGatewayInvoices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.invoiceId">invoiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#invoice_id DataOciOspGatewayInvoices#invoice_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.searchText">searchText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#search_text DataOciOspGatewayInvoices#search_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.status">status</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#status DataOciOspGatewayInvoices#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timeInvoiceEnd">timeInvoiceEnd</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_end DataOciOspGatewayInvoices#time_invoice_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timeInvoiceStart">timeInvoiceStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_start DataOciOspGatewayInvoices#time_invoice_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timePaymentEnd">timePaymentEnd</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_end DataOciOspGatewayInvoices#time_payment_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timePaymentStart">timePaymentStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_start DataOciOspGatewayInvoices#time_payment_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.type">type</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#type DataOciOspGatewayInvoices#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#compartment_id DataOciOspGatewayInvoices#compartment_id}.

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.ospHomeRegion"></a>

```java
public java.lang.String getOspHomeRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#osp_home_region DataOciOspGatewayInvoices#osp_home_region}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#filter DataOciOspGatewayInvoices#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#id DataOciOspGatewayInvoices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invoiceId`<sup>Optional</sup> <a name="invoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.invoiceId"></a>

```java
public java.lang.String getInvoiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#invoice_id DataOciOspGatewayInvoices#invoice_id}.

---

##### `searchText`<sup>Optional</sup> <a name="searchText" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.searchText"></a>

```java
public java.lang.String getSearchText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#search_text DataOciOspGatewayInvoices#search_text}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.status"></a>

```java
public java.util.List<java.lang.String> getStatus();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#status DataOciOspGatewayInvoices#status}.

---

##### `timeInvoiceEnd`<sup>Optional</sup> <a name="timeInvoiceEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timeInvoiceEnd"></a>

```java
public java.lang.String getTimeInvoiceEnd();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_end DataOciOspGatewayInvoices#time_invoice_end}.

---

##### `timeInvoiceStart`<sup>Optional</sup> <a name="timeInvoiceStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timeInvoiceStart"></a>

```java
public java.lang.String getTimeInvoiceStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_invoice_start DataOciOspGatewayInvoices#time_invoice_start}.

---

##### `timePaymentEnd`<sup>Optional</sup> <a name="timePaymentEnd" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timePaymentEnd"></a>

```java
public java.lang.String getTimePaymentEnd();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_end DataOciOspGatewayInvoices#time_payment_end}.

---

##### `timePaymentStart`<sup>Optional</sup> <a name="timePaymentStart" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.timePaymentStart"></a>

```java
public java.lang.String getTimePaymentStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#time_payment_start DataOciOspGatewayInvoices#time_payment_start}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesConfig.property.type"></a>

```java
public java.util.List<java.lang.String> getType();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#type DataOciOspGatewayInvoices#type}.

---

### DataOciOspGatewayInvoicesFilter <a name="DataOciOspGatewayInvoicesFilter" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoicesFilter;

DataOciOspGatewayInvoicesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#name DataOciOspGatewayInvoices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#values DataOciOspGatewayInvoices#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#regex DataOciOspGatewayInvoices#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#name DataOciOspGatewayInvoices#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#values DataOciOspGatewayInvoices#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoices#regex DataOciOspGatewayInvoices#regex}.

---

### DataOciOspGatewayInvoicesInvoiceCollection <a name="DataOciOspGatewayInvoicesInvoiceCollection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoicesInvoiceCollection;

DataOciOspGatewayInvoicesInvoiceCollection.builder()
    .build();
```


### DataOciOspGatewayInvoicesInvoiceCollectionItems <a name="DataOciOspGatewayInvoicesInvoiceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoicesInvoiceCollectionItems;

DataOciOspGatewayInvoicesInvoiceCollectionItems.builder()
    .build();
```


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress;

DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress.builder()
    .build();
```


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry;

DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry.builder()
    .build();
```


### DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency;

DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency.builder()
    .build();
```


### DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail;

DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOspGatewayInvoicesFilterList <a name="DataOciOspGatewayInvoicesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoicesFilterList;

new DataOciOspGatewayInvoicesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.get"></a>

```java
public DataOciOspGatewayInvoicesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>>

---


### DataOciOspGatewayInvoicesFilterOutputReference <a name="DataOciOspGatewayInvoicesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoicesFilterOutputReference;

new DataOciOspGatewayInvoicesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesFilter">DataOciOspGatewayInvoicesFilter</a>

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.get"></a>

```java
public DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.ascii3CountryCode">ascii3CountryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryId">countryId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryName">countryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.languageId">languageId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ascii3CountryCode`<sup>Required</sup> <a name="ascii3CountryCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.ascii3CountryCode"></a>

```java
public java.lang.String getAscii3CountryCode();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `countryId`<sup>Required</sup> <a name="countryId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryId"></a>

```java
public java.lang.Number getCountryId();
```

- *Type:* java.lang.Number

---

##### `countryName`<sup>Required</sup> <a name="countryName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.countryName"></a>

```java
public java.lang.String getCountryName();
```

- *Type:* java.lang.String

---

##### `languageId`<sup>Required</sup> <a name="languageId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.languageId"></a>

```java
public java.lang.Number getLanguageId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountry</a>

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.get"></a>

```java
public DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine3">addressLine3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine4">addressLine4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.companyName">companyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.contactName">contactName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.country">country</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.county">county</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.province">province</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.streetName">streetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.streetNumber">streetNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine1"></a>

```java
public java.lang.String getAddressLine1();
```

- *Type:* java.lang.String

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine2"></a>

```java
public java.lang.String getAddressLine2();
```

- *Type:* java.lang.String

---

##### `addressLine3`<sup>Required</sup> <a name="addressLine3" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine3"></a>

```java
public java.lang.String getAddressLine3();
```

- *Type:* java.lang.String

---

##### `addressLine4`<sup>Required</sup> <a name="addressLine4" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.addressLine4"></a>

```java
public java.lang.String getAddressLine4();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

---

##### `contactName`<sup>Required</sup> <a name="contactName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.contactName"></a>

```java
public java.lang.String getContactName();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.country"></a>

```java
public DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList getCountry();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressCountryList</a>

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.county"></a>

```java
public java.lang.String getCounty();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `streetName`<sup>Required</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.streetName"></a>

```java
public java.lang.String getStreetName();
```

- *Type:* java.lang.String

---

##### `streetNumber`<sup>Required</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.streetNumber"></a>

```java
public java.lang.String getStreetNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddress</a>

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.get"></a>

```java
public DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.currencyCode">currencyCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.currencySymbol">currencySymbol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.roundDecimalPoint">roundDecimalPoint</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.usdConversion">usdConversion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency">DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.currencyCode"></a>

```java
public java.lang.String getCurrencyCode();
```

- *Type:* java.lang.String

---

##### `currencySymbol`<sup>Required</sup> <a name="currencySymbol" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.currencySymbol"></a>

```java
public java.lang.String getCurrencySymbol();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roundDecimalPoint`<sup>Required</sup> <a name="roundDecimalPoint" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.roundDecimalPoint"></a>

```java
public java.lang.Number getRoundDecimalPoint();
```

- *Type:* java.lang.Number

---

##### `usdConversion`<sup>Required</sup> <a name="usdConversion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.usdConversion"></a>

```java
public java.lang.Number getUsdConversion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency">DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrency</a>

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.get"></a>

```java
public DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.accountNumber">accountNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.amountPaid">amountPaid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.cardType">cardType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.creditCardType">creditCardType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.echeckRouting">echeckRouting</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.lastDigits">lastDigits</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.nameOnCard">nameOnCard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paidBy">paidBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paymentMethod">paymentMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paypalId">paypalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paypalReference">paypalReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.routingNumber">routingNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.timeExpiration">timeExpiration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.timePaidOn">timePaidOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail">DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountNumber`<sup>Required</sup> <a name="accountNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.accountNumber"></a>

```java
public java.lang.String getAccountNumber();
```

- *Type:* java.lang.String

---

##### `amountPaid`<sup>Required</sup> <a name="amountPaid" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.amountPaid"></a>

```java
public java.lang.Number getAmountPaid();
```

- *Type:* java.lang.Number

---

##### `cardType`<sup>Required</sup> <a name="cardType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.cardType"></a>

```java
public java.lang.String getCardType();
```

- *Type:* java.lang.String

---

##### `creditCardType`<sup>Required</sup> <a name="creditCardType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.creditCardType"></a>

```java
public java.lang.String getCreditCardType();
```

- *Type:* java.lang.String

---

##### `echeckRouting`<sup>Required</sup> <a name="echeckRouting" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.echeckRouting"></a>

```java
public java.lang.String getEcheckRouting();
```

- *Type:* java.lang.String

---

##### `lastDigits`<sup>Required</sup> <a name="lastDigits" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.lastDigits"></a>

```java
public java.lang.String getLastDigits();
```

- *Type:* java.lang.String

---

##### `nameOnCard`<sup>Required</sup> <a name="nameOnCard" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.nameOnCard"></a>

```java
public java.lang.String getNameOnCard();
```

- *Type:* java.lang.String

---

##### `paidBy`<sup>Required</sup> <a name="paidBy" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paidBy"></a>

```java
public java.lang.String getPaidBy();
```

- *Type:* java.lang.String

---

##### `paymentMethod`<sup>Required</sup> <a name="paymentMethod" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paymentMethod"></a>

```java
public java.lang.String getPaymentMethod();
```

- *Type:* java.lang.String

---

##### `paypalId`<sup>Required</sup> <a name="paypalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paypalId"></a>

```java
public java.lang.String getPaypalId();
```

- *Type:* java.lang.String

---

##### `paypalReference`<sup>Required</sup> <a name="paypalReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.paypalReference"></a>

```java
public java.lang.String getPaypalReference();
```

- *Type:* java.lang.String

---

##### `routingNumber`<sup>Required</sup> <a name="routingNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.routingNumber"></a>

```java
public java.lang.String getRoutingNumber();
```

- *Type:* java.lang.String

---

##### `timeExpiration`<sup>Required</sup> <a name="timeExpiration" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.timeExpiration"></a>

```java
public java.lang.String getTimeExpiration();
```

- *Type:* java.lang.String

---

##### `timePaidOn`<sup>Required</sup> <a name="timePaidOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.timePaidOn"></a>

```java
public java.lang.String getTimePaidOn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail">DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetail</a>

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsList <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.get"></a>

```java
public DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference;

new DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.billToAddress">billToAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.currency">currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList">DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.internalInvoiceId">internalInvoiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmount">invoiceAmount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountAdjusted">invoiceAmountAdjusted</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountApplied">invoiceAmountApplied</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountCredited">invoiceAmountCredited</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountDue">invoiceAmountDue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountInDispute">invoiceAmountInDispute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceId">invoiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceNumber">invoiceNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoicePoNumber">invoicePoNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceRefNumber">invoiceRefNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceStatus">invoiceStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceType">invoiceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isCreditCardPayable">isCreditCardPayable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isDisplayDownloadPdf">isDisplayDownloadPdf</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isDisplayViewPdf">isDisplayViewPdf</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPaid">isPaid</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPayable">isPayable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPaymentFailed">isPaymentFailed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPdfEmailAvailable">isPdfEmailAvailable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.lastPaymentDetail">lastPaymentDetail</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList">DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.partyName">partyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.paymentTerms">paymentTerms</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.preferredEmail">preferredEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.subscriptionIds">subscriptionIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.tax">tax</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.timeInvoice">timeInvoice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.timeInvoiceDue">timeInvoiceDue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItems">DataOciOspGatewayInvoicesInvoiceCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `billToAddress`<sup>Required</sup> <a name="billToAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.billToAddress"></a>

```java
public DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList getBillToAddress();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList">DataOciOspGatewayInvoicesInvoiceCollectionItemsBillToAddressList</a>

---

##### `currency`<sup>Required</sup> <a name="currency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.currency"></a>

```java
public DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList getCurrency();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList">DataOciOspGatewayInvoicesInvoiceCollectionItemsCurrencyList</a>

---

##### `internalInvoiceId`<sup>Required</sup> <a name="internalInvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.internalInvoiceId"></a>

```java
public java.lang.String getInternalInvoiceId();
```

- *Type:* java.lang.String

---

##### `invoiceAmount`<sup>Required</sup> <a name="invoiceAmount" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmount"></a>

```java
public java.lang.Number getInvoiceAmount();
```

- *Type:* java.lang.Number

---

##### `invoiceAmountAdjusted`<sup>Required</sup> <a name="invoiceAmountAdjusted" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountAdjusted"></a>

```java
public java.lang.Number getInvoiceAmountAdjusted();
```

- *Type:* java.lang.Number

---

##### `invoiceAmountApplied`<sup>Required</sup> <a name="invoiceAmountApplied" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountApplied"></a>

```java
public java.lang.Number getInvoiceAmountApplied();
```

- *Type:* java.lang.Number

---

##### `invoiceAmountCredited`<sup>Required</sup> <a name="invoiceAmountCredited" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountCredited"></a>

```java
public java.lang.Number getInvoiceAmountCredited();
```

- *Type:* java.lang.Number

---

##### `invoiceAmountDue`<sup>Required</sup> <a name="invoiceAmountDue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountDue"></a>

```java
public java.lang.Number getInvoiceAmountDue();
```

- *Type:* java.lang.Number

---

##### `invoiceAmountInDispute`<sup>Required</sup> <a name="invoiceAmountInDispute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceAmountInDispute"></a>

```java
public java.lang.Number getInvoiceAmountInDispute();
```

- *Type:* java.lang.Number

---

##### `invoiceId`<sup>Required</sup> <a name="invoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceId"></a>

```java
public java.lang.String getInvoiceId();
```

- *Type:* java.lang.String

---

##### `invoiceNumber`<sup>Required</sup> <a name="invoiceNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceNumber"></a>

```java
public java.lang.String getInvoiceNumber();
```

- *Type:* java.lang.String

---

##### `invoicePoNumber`<sup>Required</sup> <a name="invoicePoNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoicePoNumber"></a>

```java
public java.lang.String getInvoicePoNumber();
```

- *Type:* java.lang.String

---

##### `invoiceRefNumber`<sup>Required</sup> <a name="invoiceRefNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceRefNumber"></a>

```java
public java.lang.String getInvoiceRefNumber();
```

- *Type:* java.lang.String

---

##### `invoiceStatus`<sup>Required</sup> <a name="invoiceStatus" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceStatus"></a>

```java
public java.lang.String getInvoiceStatus();
```

- *Type:* java.lang.String

---

##### `invoiceType`<sup>Required</sup> <a name="invoiceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.invoiceType"></a>

```java
public java.lang.String getInvoiceType();
```

- *Type:* java.lang.String

---

##### `isCreditCardPayable`<sup>Required</sup> <a name="isCreditCardPayable" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isCreditCardPayable"></a>

```java
public IResolvable getIsCreditCardPayable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isDisplayDownloadPdf`<sup>Required</sup> <a name="isDisplayDownloadPdf" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isDisplayDownloadPdf"></a>

```java
public IResolvable getIsDisplayDownloadPdf();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isDisplayViewPdf`<sup>Required</sup> <a name="isDisplayViewPdf" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isDisplayViewPdf"></a>

```java
public IResolvable getIsDisplayViewPdf();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isPaid`<sup>Required</sup> <a name="isPaid" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPaid"></a>

```java
public IResolvable getIsPaid();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isPayable`<sup>Required</sup> <a name="isPayable" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPayable"></a>

```java
public IResolvable getIsPayable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isPaymentFailed`<sup>Required</sup> <a name="isPaymentFailed" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPaymentFailed"></a>

```java
public IResolvable getIsPaymentFailed();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isPdfEmailAvailable`<sup>Required</sup> <a name="isPdfEmailAvailable" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.isPdfEmailAvailable"></a>

```java
public IResolvable getIsPdfEmailAvailable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lastPaymentDetail`<sup>Required</sup> <a name="lastPaymentDetail" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.lastPaymentDetail"></a>

```java
public DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList getLastPaymentDetail();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList">DataOciOspGatewayInvoicesInvoiceCollectionItemsLastPaymentDetailList</a>

---

##### `partyName`<sup>Required</sup> <a name="partyName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.partyName"></a>

```java
public java.lang.String getPartyName();
```

- *Type:* java.lang.String

---

##### `paymentTerms`<sup>Required</sup> <a name="paymentTerms" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.paymentTerms"></a>

```java
public java.lang.String getPaymentTerms();
```

- *Type:* java.lang.String

---

##### `preferredEmail`<sup>Required</sup> <a name="preferredEmail" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.preferredEmail"></a>

```java
public java.lang.String getPreferredEmail();
```

- *Type:* java.lang.String

---

##### `subscriptionIds`<sup>Required</sup> <a name="subscriptionIds" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.subscriptionIds"></a>

```java
public java.util.List<java.lang.String> getSubscriptionIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tax`<sup>Required</sup> <a name="tax" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.tax"></a>

```java
public java.lang.Number getTax();
```

- *Type:* java.lang.Number

---

##### `timeInvoice`<sup>Required</sup> <a name="timeInvoice" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.timeInvoice"></a>

```java
public java.lang.String getTimeInvoice();
```

- *Type:* java.lang.String

---

##### `timeInvoiceDue`<sup>Required</sup> <a name="timeInvoiceDue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.timeInvoiceDue"></a>

```java
public java.lang.String getTimeInvoiceDue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewayInvoicesInvoiceCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItems">DataOciOspGatewayInvoicesInvoiceCollectionItems</a>

---


### DataOciOspGatewayInvoicesInvoiceCollectionList <a name="DataOciOspGatewayInvoicesInvoiceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoicesInvoiceCollectionList;

new DataOciOspGatewayInvoicesInvoiceCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.get"></a>

```java
public DataOciOspGatewayInvoicesInvoiceCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewayInvoicesInvoiceCollectionOutputReference <a name="DataOciOspGatewayInvoicesInvoiceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference;

new DataOciOspGatewayInvoicesInvoiceCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList">DataOciOspGatewayInvoicesInvoiceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollection">DataOciOspGatewayInvoicesInvoiceCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.items"></a>

```java
public DataOciOspGatewayInvoicesInvoiceCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionItemsList">DataOciOspGatewayInvoicesInvoiceCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollectionOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewayInvoicesInvoiceCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoices.DataOciOspGatewayInvoicesInvoiceCollection">DataOciOspGatewayInvoicesInvoiceCollection</a>

---



