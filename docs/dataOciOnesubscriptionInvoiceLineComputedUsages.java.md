# `dataOciOnesubscriptionInvoiceLineComputedUsages` Submodule <a name="`dataOciOnesubscriptionInvoiceLineComputedUsages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionInvoiceLineComputedUsages <a name="DataOciOnesubscriptionInvoiceLineComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages oci_onesubscription_invoice_line_computed_usages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_invoice_line_computed_usages.DataOciOnesubscriptionInvoiceLineComputedUsages;

DataOciOnesubscriptionInvoiceLineComputedUsages.Builder.create(Construct scope, java.lang.String id)
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
    .invoiceLineId(java.lang.String)
//  .fields(java.util.List<java.lang.String>)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOnesubscriptionInvoiceLineComputedUsagesFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#compartment_id DataOciOnesubscriptionInvoiceLineComputedUsages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.invoiceLineId">invoiceLineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#invoice_line_id DataOciOnesubscriptionInvoiceLineComputedUsages#invoice_line_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.fields">fields</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#fields DataOciOnesubscriptionInvoiceLineComputedUsages#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#id DataOciOnesubscriptionInvoiceLineComputedUsages#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#compartment_id DataOciOnesubscriptionInvoiceLineComputedUsages#compartment_id}.

---

##### `invoiceLineId`<sup>Required</sup> <a name="invoiceLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.invoiceLineId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#invoice_line_id DataOciOnesubscriptionInvoiceLineComputedUsages#invoice_line_id}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.fields"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#fields DataOciOnesubscriptionInvoiceLineComputedUsages#fields}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#filter DataOciOnesubscriptionInvoiceLineComputedUsages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#id DataOciOnesubscriptionInvoiceLineComputedUsages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciOnesubscriptionInvoiceLineComputedUsagesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>>

---

##### `resetFields` <a name="resetFields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetFields"></a>

```java
public void resetFields()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionInvoiceLineComputedUsages resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_invoice_line_computed_usages.DataOciOnesubscriptionInvoiceLineComputedUsages;

DataOciOnesubscriptionInvoiceLineComputedUsages.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_invoice_line_computed_usages.DataOciOnesubscriptionInvoiceLineComputedUsages;

DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_invoice_line_computed_usages.DataOciOnesubscriptionInvoiceLineComputedUsages;

DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_invoice_line_computed_usages.DataOciOnesubscriptionInvoiceLineComputedUsages;

DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOnesubscriptionInvoiceLineComputedUsages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOnesubscriptionInvoiceLineComputedUsages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOnesubscriptionInvoiceLineComputedUsages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionInvoiceLineComputedUsages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList">DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoicelineComputedUsages">invoicelineComputedUsages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fieldsInput">fieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoiceLineIdInput">invoiceLineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fields">fields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoiceLineId">invoiceLineId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.filter"></a>

```java
public DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList">DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList</a>

---

##### `invoicelineComputedUsages`<sup>Required</sup> <a name="invoicelineComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoicelineComputedUsages"></a>

```java
public DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList getInvoicelineComputedUsages();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fieldsInput"></a>

```java
public java.util.List<java.lang.String> getFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `invoiceLineIdInput`<sup>Optional</sup> <a name="invoiceLineIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoiceLineIdInput"></a>

```java
public java.lang.String getInvoiceLineIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.fields"></a>

```java
public java.util.List<java.lang.String> getFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `invoiceLineId`<sup>Required</sup> <a name="invoiceLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.invoiceLineId"></a>

```java
public java.lang.String getInvoiceLineId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsages.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionInvoiceLineComputedUsagesConfig <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_invoice_line_computed_usages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig;

DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.builder()
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
    .invoiceLineId(java.lang.String)
//  .fields(java.util.List<java.lang.String>)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOnesubscriptionInvoiceLineComputedUsagesFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#compartment_id DataOciOnesubscriptionInvoiceLineComputedUsages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.invoiceLineId">invoiceLineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#invoice_line_id DataOciOnesubscriptionInvoiceLineComputedUsages#invoice_line_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.fields">fields</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#fields DataOciOnesubscriptionInvoiceLineComputedUsages#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#id DataOciOnesubscriptionInvoiceLineComputedUsages#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#compartment_id DataOciOnesubscriptionInvoiceLineComputedUsages#compartment_id}.

---

##### `invoiceLineId`<sup>Required</sup> <a name="invoiceLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.invoiceLineId"></a>

```java
public java.lang.String getInvoiceLineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#invoice_line_id DataOciOnesubscriptionInvoiceLineComputedUsages#invoice_line_id}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.fields"></a>

```java
public java.util.List<java.lang.String> getFields();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#fields DataOciOnesubscriptionInvoiceLineComputedUsages#fields}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#filter DataOciOnesubscriptionInvoiceLineComputedUsages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#id DataOciOnesubscriptionInvoiceLineComputedUsages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOnesubscriptionInvoiceLineComputedUsagesFilter <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_invoice_line_computed_usages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter;

DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#name DataOciOnesubscriptionInvoiceLineComputedUsages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#values DataOciOnesubscriptionInvoiceLineComputedUsages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#regex DataOciOnesubscriptionInvoiceLineComputedUsages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#name DataOciOnesubscriptionInvoiceLineComputedUsages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#values DataOciOnesubscriptionInvoiceLineComputedUsages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoice_line_computed_usages#regex DataOciOnesubscriptionInvoiceLineComputedUsages#regex}.

---

### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_invoice_line_computed_usages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages;

DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages.builder()
    .build();
```


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_invoice_line_computed_usages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct;

DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct.builder()
    .build();
```


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_invoice_line_computed_usages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct;

DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_invoice_line_computed_usages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList;

new DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.get"></a>

```java
public DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>>

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_invoice_line_computed_usages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference;

new DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesFilter">DataOciOnesubscriptionInvoiceLineComputedUsagesFilter</a>

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_invoice_line_computed_usages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList;

new DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.get"></a>

```java
public DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_invoice_line_computed_usages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference;

new DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.cost">cost</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.costRounded">costRounded</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.netUnitPrice">netUnitPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.parentProduct">parentProduct</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.quantity">quantity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.timeMeteredOn">timeMeteredOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cost`<sup>Required</sup> <a name="cost" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.cost"></a>

```java
public java.lang.Number getCost();
```

- *Type:* java.lang.Number

---

##### `costRounded`<sup>Required</sup> <a name="costRounded" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.costRounded"></a>

```java
public java.lang.Number getCostRounded();
```

- *Type:* java.lang.Number

---

##### `netUnitPrice`<sup>Required</sup> <a name="netUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.netUnitPrice"></a>

```java
public java.lang.Number getNetUnitPrice();
```

- *Type:* java.lang.Number

---

##### `parentProduct`<sup>Required</sup> <a name="parentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.parentProduct"></a>

```java
public DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList getParentProduct();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList</a>

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.product"></a>

```java
public DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList getProduct();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList</a>

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.quantity"></a>

```java
public java.lang.Number getQuantity();
```

- *Type:* java.lang.Number

---

##### `timeMeteredOn`<sup>Required</sup> <a name="timeMeteredOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.timeMeteredOn"></a>

```java
public java.lang.String getTimeMeteredOn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesOutputReference.property.internalValue"></a>

```java
public DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsages</a>

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_invoice_line_computed_usages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList;

new DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.get"></a>

```java
public DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_invoice_line_computed_usages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference;

new DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.billingCategory">billingCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.partNumber">partNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.productCategory">productCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.ucmRateCardPartType">ucmRateCardPartType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.unitOfMeasure">unitOfMeasure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `billingCategory`<sup>Required</sup> <a name="billingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.billingCategory"></a>

```java
public java.lang.String getBillingCategory();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.partNumber"></a>

```java
public java.lang.String getPartNumber();
```

- *Type:* java.lang.String

---

##### `productCategory`<sup>Required</sup> <a name="productCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.productCategory"></a>

```java
public java.lang.String getProductCategory();
```

- *Type:* java.lang.String

---

##### `ucmRateCardPartType`<sup>Required</sup> <a name="ucmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.ucmRateCardPartType"></a>

```java
public java.lang.String getUcmRateCardPartType();
```

- *Type:* java.lang.String

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.unitOfMeasure"></a>

```java
public java.lang.String getUnitOfMeasure();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProductOutputReference.property.internalValue"></a>

```java
public DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesParentProduct</a>

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_invoice_line_computed_usages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList;

new DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.get"></a>

```java
public DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference <a name="DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_invoice_line_computed_usages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference;

new DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.billingCategory">billingCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.partNumber">partNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.productCategory">productCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.ucmRateCardPartType">ucmRateCardPartType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.unitOfMeasure">unitOfMeasure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `billingCategory`<sup>Required</sup> <a name="billingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.billingCategory"></a>

```java
public java.lang.String getBillingCategory();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.partNumber"></a>

```java
public java.lang.String getPartNumber();
```

- *Type:* java.lang.String

---

##### `productCategory`<sup>Required</sup> <a name="productCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.productCategory"></a>

```java
public java.lang.String getProductCategory();
```

- *Type:* java.lang.String

---

##### `ucmRateCardPartType`<sup>Required</sup> <a name="ucmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.ucmRateCardPartType"></a>

```java
public java.lang.String getUcmRateCardPartType();
```

- *Type:* java.lang.String

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.unitOfMeasure"></a>

```java
public java.lang.String getUnitOfMeasure();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProductOutputReference.property.internalValue"></a>

```java
public DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoiceLineComputedUsages.DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct">DataOciOnesubscriptionInvoiceLineComputedUsagesInvoicelineComputedUsagesProduct</a>

---



