# `dataOciOspGatewayInvoice` Submodule <a name="`dataOciOspGatewayInvoice` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOspGatewayInvoice <a name="DataOciOspGatewayInvoice" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice oci_osp_gateway_invoice}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoice.DataOciOspGatewayInvoice;

DataOciOspGatewayInvoice.Builder.create(Construct scope, java.lang.String id)
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
    .internalInvoiceId(java.lang.String)
    .ospHomeRegion(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#compartment_id DataOciOspGatewayInvoice#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.internalInvoiceId">internalInvoiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#internal_invoice_id DataOciOspGatewayInvoice#internal_invoice_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.ospHomeRegion">ospHomeRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#osp_home_region DataOciOspGatewayInvoice#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#id DataOciOspGatewayInvoice#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#compartment_id DataOciOspGatewayInvoice#compartment_id}.

---

##### `internalInvoiceId`<sup>Required</sup> <a name="internalInvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.internalInvoiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#internal_invoice_id DataOciOspGatewayInvoice#internal_invoice_id}.

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.ospHomeRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#osp_home_region DataOciOspGatewayInvoice#osp_home_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#id DataOciOspGatewayInvoice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOspGatewayInvoice resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoice.DataOciOspGatewayInvoice;

DataOciOspGatewayInvoice.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoice.DataOciOspGatewayInvoice;

DataOciOspGatewayInvoice.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoice.DataOciOspGatewayInvoice;

DataOciOspGatewayInvoice.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoice.DataOciOspGatewayInvoice;

DataOciOspGatewayInvoice.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOspGatewayInvoice.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOspGatewayInvoice resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOspGatewayInvoice to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOspGatewayInvoice that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOspGatewayInvoice to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.billToAddress">billToAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList">DataOciOspGatewayInvoiceBillToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.currency">currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList">DataOciOspGatewayInvoiceCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmount">invoiceAmount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountAdjusted">invoiceAmountAdjusted</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountApplied">invoiceAmountApplied</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountCredited">invoiceAmountCredited</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountDue">invoiceAmountDue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceId">invoiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceNumber">invoiceNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoicePoNumber">invoicePoNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceRefNumber">invoiceRefNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceStatus">invoiceStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceType">invoiceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isCreditCardPayable">isCreditCardPayable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isDisplayDownloadPdf">isDisplayDownloadPdf</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isPayable">isPayable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isPdfEmailAvailable">isPdfEmailAvailable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.lastPaymentDetail">lastPaymentDetail</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList">DataOciOspGatewayInvoiceLastPaymentDetailList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.paymentTerms">paymentTerms</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.preferredEmail">preferredEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.subscriptionIds">subscriptionIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.tax">tax</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.timeInvoice">timeInvoice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.timeInvoiceDue">timeInvoiceDue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.internalInvoiceIdInput">internalInvoiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.ospHomeRegionInput">ospHomeRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.internalInvoiceId">internalInvoiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.ospHomeRegion">ospHomeRegion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `billToAddress`<sup>Required</sup> <a name="billToAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.billToAddress"></a>

```java
public DataOciOspGatewayInvoiceBillToAddressList getBillToAddress();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList">DataOciOspGatewayInvoiceBillToAddressList</a>

---

##### `currency`<sup>Required</sup> <a name="currency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.currency"></a>

```java
public DataOciOspGatewayInvoiceCurrencyList getCurrency();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList">DataOciOspGatewayInvoiceCurrencyList</a>

---

##### `invoiceAmount`<sup>Required</sup> <a name="invoiceAmount" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmount"></a>

```java
public java.lang.Number getInvoiceAmount();
```

- *Type:* java.lang.Number

---

##### `invoiceAmountAdjusted`<sup>Required</sup> <a name="invoiceAmountAdjusted" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountAdjusted"></a>

```java
public java.lang.Number getInvoiceAmountAdjusted();
```

- *Type:* java.lang.Number

---

##### `invoiceAmountApplied`<sup>Required</sup> <a name="invoiceAmountApplied" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountApplied"></a>

```java
public java.lang.Number getInvoiceAmountApplied();
```

- *Type:* java.lang.Number

---

##### `invoiceAmountCredited`<sup>Required</sup> <a name="invoiceAmountCredited" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountCredited"></a>

```java
public java.lang.Number getInvoiceAmountCredited();
```

- *Type:* java.lang.Number

---

##### `invoiceAmountDue`<sup>Required</sup> <a name="invoiceAmountDue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceAmountDue"></a>

```java
public java.lang.Number getInvoiceAmountDue();
```

- *Type:* java.lang.Number

---

##### `invoiceId`<sup>Required</sup> <a name="invoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceId"></a>

```java
public java.lang.String getInvoiceId();
```

- *Type:* java.lang.String

---

##### `invoiceNumber`<sup>Required</sup> <a name="invoiceNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceNumber"></a>

```java
public java.lang.String getInvoiceNumber();
```

- *Type:* java.lang.String

---

##### `invoicePoNumber`<sup>Required</sup> <a name="invoicePoNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoicePoNumber"></a>

```java
public java.lang.String getInvoicePoNumber();
```

- *Type:* java.lang.String

---

##### `invoiceRefNumber`<sup>Required</sup> <a name="invoiceRefNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceRefNumber"></a>

```java
public java.lang.String getInvoiceRefNumber();
```

- *Type:* java.lang.String

---

##### `invoiceStatus`<sup>Required</sup> <a name="invoiceStatus" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceStatus"></a>

```java
public java.lang.String getInvoiceStatus();
```

- *Type:* java.lang.String

---

##### `invoiceType`<sup>Required</sup> <a name="invoiceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.invoiceType"></a>

```java
public java.lang.String getInvoiceType();
```

- *Type:* java.lang.String

---

##### `isCreditCardPayable`<sup>Required</sup> <a name="isCreditCardPayable" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isCreditCardPayable"></a>

```java
public IResolvable getIsCreditCardPayable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isDisplayDownloadPdf`<sup>Required</sup> <a name="isDisplayDownloadPdf" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isDisplayDownloadPdf"></a>

```java
public IResolvable getIsDisplayDownloadPdf();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isPayable`<sup>Required</sup> <a name="isPayable" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isPayable"></a>

```java
public IResolvable getIsPayable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isPdfEmailAvailable`<sup>Required</sup> <a name="isPdfEmailAvailable" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.isPdfEmailAvailable"></a>

```java
public IResolvable getIsPdfEmailAvailable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lastPaymentDetail`<sup>Required</sup> <a name="lastPaymentDetail" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.lastPaymentDetail"></a>

```java
public DataOciOspGatewayInvoiceLastPaymentDetailList getLastPaymentDetail();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList">DataOciOspGatewayInvoiceLastPaymentDetailList</a>

---

##### `paymentTerms`<sup>Required</sup> <a name="paymentTerms" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.paymentTerms"></a>

```java
public java.lang.String getPaymentTerms();
```

- *Type:* java.lang.String

---

##### `preferredEmail`<sup>Required</sup> <a name="preferredEmail" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.preferredEmail"></a>

```java
public java.lang.String getPreferredEmail();
```

- *Type:* java.lang.String

---

##### `subscriptionIds`<sup>Required</sup> <a name="subscriptionIds" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.subscriptionIds"></a>

```java
public java.util.List<java.lang.String> getSubscriptionIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tax`<sup>Required</sup> <a name="tax" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.tax"></a>

```java
public java.lang.Number getTax();
```

- *Type:* java.lang.Number

---

##### `timeInvoice`<sup>Required</sup> <a name="timeInvoice" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.timeInvoice"></a>

```java
public java.lang.String getTimeInvoice();
```

- *Type:* java.lang.String

---

##### `timeInvoiceDue`<sup>Required</sup> <a name="timeInvoiceDue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.timeInvoiceDue"></a>

```java
public java.lang.String getTimeInvoiceDue();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `internalInvoiceIdInput`<sup>Optional</sup> <a name="internalInvoiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.internalInvoiceIdInput"></a>

```java
public java.lang.String getInternalInvoiceIdInput();
```

- *Type:* java.lang.String

---

##### `ospHomeRegionInput`<sup>Optional</sup> <a name="ospHomeRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.ospHomeRegionInput"></a>

```java
public java.lang.String getOspHomeRegionInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalInvoiceId`<sup>Required</sup> <a name="internalInvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.internalInvoiceId"></a>

```java
public java.lang.String getInternalInvoiceId();
```

- *Type:* java.lang.String

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.ospHomeRegion"></a>

```java
public java.lang.String getOspHomeRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoice.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOspGatewayInvoiceBillToAddress <a name="DataOciOspGatewayInvoiceBillToAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoice.DataOciOspGatewayInvoiceBillToAddress;

DataOciOspGatewayInvoiceBillToAddress.builder()
    .build();
```


### DataOciOspGatewayInvoiceBillToAddressCountry <a name="DataOciOspGatewayInvoiceBillToAddressCountry" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoice.DataOciOspGatewayInvoiceBillToAddressCountry;

DataOciOspGatewayInvoiceBillToAddressCountry.builder()
    .build();
```


### DataOciOspGatewayInvoiceConfig <a name="DataOciOspGatewayInvoiceConfig" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoice.DataOciOspGatewayInvoiceConfig;

DataOciOspGatewayInvoiceConfig.builder()
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
    .internalInvoiceId(java.lang.String)
    .ospHomeRegion(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#compartment_id DataOciOspGatewayInvoice#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.internalInvoiceId">internalInvoiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#internal_invoice_id DataOciOspGatewayInvoice#internal_invoice_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.ospHomeRegion">ospHomeRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#osp_home_region DataOciOspGatewayInvoice#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#id DataOciOspGatewayInvoice#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#compartment_id DataOciOspGatewayInvoice#compartment_id}.

---

##### `internalInvoiceId`<sup>Required</sup> <a name="internalInvoiceId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.internalInvoiceId"></a>

```java
public java.lang.String getInternalInvoiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#internal_invoice_id DataOciOspGatewayInvoice#internal_invoice_id}.

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.ospHomeRegion"></a>

```java
public java.lang.String getOspHomeRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#osp_home_region DataOciOspGatewayInvoice#osp_home_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_invoice#id DataOciOspGatewayInvoice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOspGatewayInvoiceCurrency <a name="DataOciOspGatewayInvoiceCurrency" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrency.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoice.DataOciOspGatewayInvoiceCurrency;

DataOciOspGatewayInvoiceCurrency.builder()
    .build();
```


### DataOciOspGatewayInvoiceLastPaymentDetail <a name="DataOciOspGatewayInvoiceLastPaymentDetail" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetail"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetail.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoice.DataOciOspGatewayInvoiceLastPaymentDetail;

DataOciOspGatewayInvoiceLastPaymentDetail.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOspGatewayInvoiceBillToAddressCountryList <a name="DataOciOspGatewayInvoiceBillToAddressCountryList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoice.DataOciOspGatewayInvoiceBillToAddressCountryList;

new DataOciOspGatewayInvoiceBillToAddressCountryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.get"></a>

```java
public DataOciOspGatewayInvoiceBillToAddressCountryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewayInvoiceBillToAddressCountryOutputReference <a name="DataOciOspGatewayInvoiceBillToAddressCountryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference;

new DataOciOspGatewayInvoiceBillToAddressCountryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.ascii3CountryCode">ascii3CountryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.countryId">countryId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.countryName">countryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.languageId">languageId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountry">DataOciOspGatewayInvoiceBillToAddressCountry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ascii3CountryCode`<sup>Required</sup> <a name="ascii3CountryCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.ascii3CountryCode"></a>

```java
public java.lang.String getAscii3CountryCode();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `countryId`<sup>Required</sup> <a name="countryId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.countryId"></a>

```java
public java.lang.Number getCountryId();
```

- *Type:* java.lang.Number

---

##### `countryName`<sup>Required</sup> <a name="countryName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.countryName"></a>

```java
public java.lang.String getCountryName();
```

- *Type:* java.lang.String

---

##### `languageId`<sup>Required</sup> <a name="languageId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.languageId"></a>

```java
public java.lang.Number getLanguageId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewayInvoiceBillToAddressCountry getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountry">DataOciOspGatewayInvoiceBillToAddressCountry</a>

---


### DataOciOspGatewayInvoiceBillToAddressList <a name="DataOciOspGatewayInvoiceBillToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoice.DataOciOspGatewayInvoiceBillToAddressList;

new DataOciOspGatewayInvoiceBillToAddressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.get"></a>

```java
public DataOciOspGatewayInvoiceBillToAddressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewayInvoiceBillToAddressOutputReference <a name="DataOciOspGatewayInvoiceBillToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoice.DataOciOspGatewayInvoiceBillToAddressOutputReference;

new DataOciOspGatewayInvoiceBillToAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine1">addressLine1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine2">addressLine2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine3">addressLine3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine4">addressLine4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.companyName">companyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.contactName">contactName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.country">country</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList">DataOciOspGatewayInvoiceBillToAddressCountryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.county">county</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.province">province</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.streetName">streetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.streetNumber">streetNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddress">DataOciOspGatewayInvoiceBillToAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressLine1`<sup>Required</sup> <a name="addressLine1" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine1"></a>

```java
public java.lang.String getAddressLine1();
```

- *Type:* java.lang.String

---

##### `addressLine2`<sup>Required</sup> <a name="addressLine2" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine2"></a>

```java
public java.lang.String getAddressLine2();
```

- *Type:* java.lang.String

---

##### `addressLine3`<sup>Required</sup> <a name="addressLine3" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine3"></a>

```java
public java.lang.String getAddressLine3();
```

- *Type:* java.lang.String

---

##### `addressLine4`<sup>Required</sup> <a name="addressLine4" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.addressLine4"></a>

```java
public java.lang.String getAddressLine4();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

---

##### `contactName`<sup>Required</sup> <a name="contactName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.contactName"></a>

```java
public java.lang.String getContactName();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.country"></a>

```java
public DataOciOspGatewayInvoiceBillToAddressCountryList getCountry();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressCountryList">DataOciOspGatewayInvoiceBillToAddressCountryList</a>

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.county"></a>

```java
public java.lang.String getCounty();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `streetName`<sup>Required</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.streetName"></a>

```java
public java.lang.String getStreetName();
```

- *Type:* java.lang.String

---

##### `streetNumber`<sup>Required</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.streetNumber"></a>

```java
public java.lang.String getStreetNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddressOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewayInvoiceBillToAddress getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceBillToAddress">DataOciOspGatewayInvoiceBillToAddress</a>

---


### DataOciOspGatewayInvoiceCurrencyList <a name="DataOciOspGatewayInvoiceCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoice.DataOciOspGatewayInvoiceCurrencyList;

new DataOciOspGatewayInvoiceCurrencyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.get"></a>

```java
public DataOciOspGatewayInvoiceCurrencyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewayInvoiceCurrencyOutputReference <a name="DataOciOspGatewayInvoiceCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoice.DataOciOspGatewayInvoiceCurrencyOutputReference;

new DataOciOspGatewayInvoiceCurrencyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.currencyCode">currencyCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.currencySymbol">currencySymbol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.roundDecimalPoint">roundDecimalPoint</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.usdConversion">usdConversion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrency">DataOciOspGatewayInvoiceCurrency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.currencyCode"></a>

```java
public java.lang.String getCurrencyCode();
```

- *Type:* java.lang.String

---

##### `currencySymbol`<sup>Required</sup> <a name="currencySymbol" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.currencySymbol"></a>

```java
public java.lang.String getCurrencySymbol();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roundDecimalPoint`<sup>Required</sup> <a name="roundDecimalPoint" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.roundDecimalPoint"></a>

```java
public java.lang.Number getRoundDecimalPoint();
```

- *Type:* java.lang.Number

---

##### `usdConversion`<sup>Required</sup> <a name="usdConversion" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.usdConversion"></a>

```java
public java.lang.Number getUsdConversion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrencyOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewayInvoiceCurrency getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceCurrency">DataOciOspGatewayInvoiceCurrency</a>

---


### DataOciOspGatewayInvoiceLastPaymentDetailList <a name="DataOciOspGatewayInvoiceLastPaymentDetailList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoice.DataOciOspGatewayInvoiceLastPaymentDetailList;

new DataOciOspGatewayInvoiceLastPaymentDetailList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.get"></a>

```java
public DataOciOspGatewayInvoiceLastPaymentDetailOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOspGatewayInvoiceLastPaymentDetailOutputReference <a name="DataOciOspGatewayInvoiceLastPaymentDetailOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osp_gateway_invoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference;

new DataOciOspGatewayInvoiceLastPaymentDetailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.accountNumber">accountNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.amountPaid">amountPaid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.cardType">cardType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.creditCardType">creditCardType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.echeckRouting">echeckRouting</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.lastDigits">lastDigits</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.nameOnCard">nameOnCard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paidBy">paidBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paymentMethod">paymentMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paypalId">paypalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paypalReference">paypalReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.routingNumber">routingNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.timeExpiration">timeExpiration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.timePaidOn">timePaidOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetail">DataOciOspGatewayInvoiceLastPaymentDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountNumber`<sup>Required</sup> <a name="accountNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.accountNumber"></a>

```java
public java.lang.String getAccountNumber();
```

- *Type:* java.lang.String

---

##### `amountPaid`<sup>Required</sup> <a name="amountPaid" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.amountPaid"></a>

```java
public java.lang.Number getAmountPaid();
```

- *Type:* java.lang.Number

---

##### `cardType`<sup>Required</sup> <a name="cardType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.cardType"></a>

```java
public java.lang.String getCardType();
```

- *Type:* java.lang.String

---

##### `creditCardType`<sup>Required</sup> <a name="creditCardType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.creditCardType"></a>

```java
public java.lang.String getCreditCardType();
```

- *Type:* java.lang.String

---

##### `echeckRouting`<sup>Required</sup> <a name="echeckRouting" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.echeckRouting"></a>

```java
public java.lang.String getEcheckRouting();
```

- *Type:* java.lang.String

---

##### `lastDigits`<sup>Required</sup> <a name="lastDigits" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.lastDigits"></a>

```java
public java.lang.String getLastDigits();
```

- *Type:* java.lang.String

---

##### `nameOnCard`<sup>Required</sup> <a name="nameOnCard" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.nameOnCard"></a>

```java
public java.lang.String getNameOnCard();
```

- *Type:* java.lang.String

---

##### `paidBy`<sup>Required</sup> <a name="paidBy" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paidBy"></a>

```java
public java.lang.String getPaidBy();
```

- *Type:* java.lang.String

---

##### `paymentMethod`<sup>Required</sup> <a name="paymentMethod" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paymentMethod"></a>

```java
public java.lang.String getPaymentMethod();
```

- *Type:* java.lang.String

---

##### `paypalId`<sup>Required</sup> <a name="paypalId" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paypalId"></a>

```java
public java.lang.String getPaypalId();
```

- *Type:* java.lang.String

---

##### `paypalReference`<sup>Required</sup> <a name="paypalReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.paypalReference"></a>

```java
public java.lang.String getPaypalReference();
```

- *Type:* java.lang.String

---

##### `routingNumber`<sup>Required</sup> <a name="routingNumber" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.routingNumber"></a>

```java
public java.lang.String getRoutingNumber();
```

- *Type:* java.lang.String

---

##### `timeExpiration`<sup>Required</sup> <a name="timeExpiration" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.timeExpiration"></a>

```java
public java.lang.String getTimeExpiration();
```

- *Type:* java.lang.String

---

##### `timePaidOn`<sup>Required</sup> <a name="timePaidOn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.timePaidOn"></a>

```java
public java.lang.String getTimePaidOn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetailOutputReference.property.internalValue"></a>

```java
public DataOciOspGatewayInvoiceLastPaymentDetail getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewayInvoice.DataOciOspGatewayInvoiceLastPaymentDetail">DataOciOspGatewayInvoiceLastPaymentDetail</a>

---



