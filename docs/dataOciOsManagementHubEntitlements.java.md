# `dataOciOsManagementHubEntitlements` Submodule <a name="`dataOciOsManagementHubEntitlements` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubEntitlements <a name="DataOciOsManagementHubEntitlements" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements oci_os_management_hub_entitlements}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_entitlements.DataOciOsManagementHubEntitlements;

DataOciOsManagementHubEntitlements.Builder.create(Construct scope, java.lang.String id)
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
//  .csi(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOsManagementHubEntitlementsFilter>)
//  .id(java.lang.String)
//  .vendorName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#compartment_id DataOciOsManagementHubEntitlements#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.csi">csi</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#csi DataOciOsManagementHubEntitlements#csi}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilter">DataOciOsManagementHubEntitlementsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#id DataOciOsManagementHubEntitlements#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.vendorName">vendorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#vendor_name DataOciOsManagementHubEntitlements#vendor_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#compartment_id DataOciOsManagementHubEntitlements#compartment_id}.

---

##### `csi`<sup>Optional</sup> <a name="csi" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.csi"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#csi DataOciOsManagementHubEntitlements#csi}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilter">DataOciOsManagementHubEntitlementsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#filter DataOciOsManagementHubEntitlements#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#id DataOciOsManagementHubEntitlements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `vendorName`<sup>Optional</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.Initializer.parameter.vendorName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#vendor_name DataOciOsManagementHubEntitlements#vendor_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.resetCsi">resetCsi</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.resetVendorName">resetVendorName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciOsManagementHubEntitlementsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilter">DataOciOsManagementHubEntitlementsFilter</a>>

---

##### `resetCsi` <a name="resetCsi" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.resetCsi"></a>

```java
public void resetCsi()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.resetId"></a>

```java
public void resetId()
```

##### `resetVendorName` <a name="resetVendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.resetVendorName"></a>

```java
public void resetVendorName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubEntitlements resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_entitlements.DataOciOsManagementHubEntitlements;

DataOciOsManagementHubEntitlements.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_entitlements.DataOciOsManagementHubEntitlements;

DataOciOsManagementHubEntitlements.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_entitlements.DataOciOsManagementHubEntitlements;

DataOciOsManagementHubEntitlements.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_entitlements.DataOciOsManagementHubEntitlements;

DataOciOsManagementHubEntitlements.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOsManagementHubEntitlements.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOsManagementHubEntitlements resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOsManagementHubEntitlements to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOsManagementHubEntitlements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubEntitlements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.entitlementCollection">entitlementCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList">DataOciOsManagementHubEntitlementsEntitlementCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList">DataOciOsManagementHubEntitlementsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.csiInput">csiInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilter">DataOciOsManagementHubEntitlementsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.vendorNameInput">vendorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.csi">csi</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.vendorName">vendorName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `entitlementCollection`<sup>Required</sup> <a name="entitlementCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.entitlementCollection"></a>

```java
public DataOciOsManagementHubEntitlementsEntitlementCollectionList getEntitlementCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList">DataOciOsManagementHubEntitlementsEntitlementCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.filter"></a>

```java
public DataOciOsManagementHubEntitlementsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList">DataOciOsManagementHubEntitlementsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `csiInput`<sup>Optional</sup> <a name="csiInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.csiInput"></a>

```java
public java.lang.String getCsiInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilter">DataOciOsManagementHubEntitlementsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `vendorNameInput`<sup>Optional</sup> <a name="vendorNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.vendorNameInput"></a>

```java
public java.lang.String getVendorNameInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `csi`<sup>Required</sup> <a name="csi" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.csi"></a>

```java
public java.lang.String getCsi();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.vendorName"></a>

```java
public java.lang.String getVendorName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlements.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubEntitlementsConfig <a name="DataOciOsManagementHubEntitlementsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_entitlements.DataOciOsManagementHubEntitlementsConfig;

DataOciOsManagementHubEntitlementsConfig.builder()
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
//  .csi(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOsManagementHubEntitlementsFilter>)
//  .id(java.lang.String)
//  .vendorName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#compartment_id DataOciOsManagementHubEntitlements#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.csi">csi</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#csi DataOciOsManagementHubEntitlements#csi}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilter">DataOciOsManagementHubEntitlementsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#id DataOciOsManagementHubEntitlements#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.vendorName">vendorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#vendor_name DataOciOsManagementHubEntitlements#vendor_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#compartment_id DataOciOsManagementHubEntitlements#compartment_id}.

---

##### `csi`<sup>Optional</sup> <a name="csi" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.csi"></a>

```java
public java.lang.String getCsi();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#csi DataOciOsManagementHubEntitlements#csi}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilter">DataOciOsManagementHubEntitlementsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#filter DataOciOsManagementHubEntitlements#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#id DataOciOsManagementHubEntitlements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `vendorName`<sup>Optional</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsConfig.property.vendorName"></a>

```java
public java.lang.String getVendorName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#vendor_name DataOciOsManagementHubEntitlements#vendor_name}.

---

### DataOciOsManagementHubEntitlementsEntitlementCollection <a name="DataOciOsManagementHubEntitlementsEntitlementCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_entitlements.DataOciOsManagementHubEntitlementsEntitlementCollection;

DataOciOsManagementHubEntitlementsEntitlementCollection.builder()
    .build();
```


### DataOciOsManagementHubEntitlementsEntitlementCollectionItems <a name="DataOciOsManagementHubEntitlementsEntitlementCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_entitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItems;

DataOciOsManagementHubEntitlementsEntitlementCollectionItems.builder()
    .build();
```


### DataOciOsManagementHubEntitlementsFilter <a name="DataOciOsManagementHubEntitlementsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_entitlements.DataOciOsManagementHubEntitlementsFilter;

DataOciOsManagementHubEntitlementsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#name DataOciOsManagementHubEntitlements#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#values DataOciOsManagementHubEntitlements#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#regex DataOciOsManagementHubEntitlements#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#name DataOciOsManagementHubEntitlements#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#values DataOciOsManagementHubEntitlements#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_entitlements#regex DataOciOsManagementHubEntitlements#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList <a name="DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_entitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList;

new DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.get"></a>

```java
public DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference <a name="DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_entitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference;

new DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.property.csi">csi</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.property.vendorName">vendorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItems">DataOciOsManagementHubEntitlementsEntitlementCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `csi`<sup>Required</sup> <a name="csi" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.property.csi"></a>

```java
public java.lang.String getCsi();
```

- *Type:* java.lang.String

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.property.vendorName"></a>

```java
public java.lang.String getVendorName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubEntitlementsEntitlementCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItems">DataOciOsManagementHubEntitlementsEntitlementCollectionItems</a>

---


### DataOciOsManagementHubEntitlementsEntitlementCollectionList <a name="DataOciOsManagementHubEntitlementsEntitlementCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_entitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList;

new DataOciOsManagementHubEntitlementsEntitlementCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.get"></a>

```java
public DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference <a name="DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_entitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference;

new DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.property.csi">csi</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList">DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollection">DataOciOsManagementHubEntitlementsEntitlementCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `csi`<sup>Required</sup> <a name="csi" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.property.csi"></a>

```java
public java.lang.String getCsi();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.property.items"></a>

```java
public DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList">DataOciOsManagementHubEntitlementsEntitlementCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollectionOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubEntitlementsEntitlementCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsEntitlementCollection">DataOciOsManagementHubEntitlementsEntitlementCollection</a>

---


### DataOciOsManagementHubEntitlementsFilterList <a name="DataOciOsManagementHubEntitlementsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_entitlements.DataOciOsManagementHubEntitlementsFilterList;

new DataOciOsManagementHubEntitlementsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.get"></a>

```java
public DataOciOsManagementHubEntitlementsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilter">DataOciOsManagementHubEntitlementsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilter">DataOciOsManagementHubEntitlementsFilter</a>>

---


### DataOciOsManagementHubEntitlementsFilterOutputReference <a name="DataOciOsManagementHubEntitlementsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_entitlements.DataOciOsManagementHubEntitlementsFilterOutputReference;

new DataOciOsManagementHubEntitlementsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilter">DataOciOsManagementHubEntitlementsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubEntitlements.DataOciOsManagementHubEntitlementsFilter">DataOciOsManagementHubEntitlementsFilter</a>

---


