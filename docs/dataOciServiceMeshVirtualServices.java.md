# `dataOciServiceMeshVirtualServices` Submodule <a name="`dataOciServiceMeshVirtualServices` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshVirtualServices <a name="DataOciServiceMeshVirtualServices" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services oci_service_mesh_virtual_services}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_services.DataOciServiceMeshVirtualServices;

DataOciServiceMeshVirtualServices.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciServiceMeshVirtualServicesFilter>)
//  .id(java.lang.String)
//  .meshId(java.lang.String)
//  .name(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#compartment_id DataOciServiceMeshVirtualServices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter">DataOciServiceMeshVirtualServicesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#id DataOciServiceMeshVirtualServices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.meshId">meshId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#mesh_id DataOciServiceMeshVirtualServices#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#name DataOciServiceMeshVirtualServices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#state DataOciServiceMeshVirtualServices#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#compartment_id DataOciServiceMeshVirtualServices#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter">DataOciServiceMeshVirtualServicesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#filter DataOciServiceMeshVirtualServices#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#id DataOciServiceMeshVirtualServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshId`<sup>Optional</sup> <a name="meshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.meshId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#mesh_id DataOciServiceMeshVirtualServices#mesh_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#name DataOciServiceMeshVirtualServices#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#state DataOciServiceMeshVirtualServices#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetMeshId">resetMeshId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciServiceMeshVirtualServicesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter">DataOciServiceMeshVirtualServicesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetId"></a>

```java
public void resetId()
```

##### `resetMeshId` <a name="resetMeshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetMeshId"></a>

```java
public void resetMeshId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetName"></a>

```java
public void resetName()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceMeshVirtualServices resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_services.DataOciServiceMeshVirtualServices;

DataOciServiceMeshVirtualServices.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_services.DataOciServiceMeshVirtualServices;

DataOciServiceMeshVirtualServices.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_services.DataOciServiceMeshVirtualServices;

DataOciServiceMeshVirtualServices.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_services.DataOciServiceMeshVirtualServices;

DataOciServiceMeshVirtualServices.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciServiceMeshVirtualServices.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciServiceMeshVirtualServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciServiceMeshVirtualServices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciServiceMeshVirtualServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshVirtualServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList">DataOciServiceMeshVirtualServicesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.virtualServiceCollection">virtualServiceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter">DataOciServiceMeshVirtualServicesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.meshIdInput">meshIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.meshId">meshId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.filter"></a>

```java
public DataOciServiceMeshVirtualServicesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList">DataOciServiceMeshVirtualServicesFilterList</a>

---

##### `virtualServiceCollection`<sup>Required</sup> <a name="virtualServiceCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.virtualServiceCollection"></a>

```java
public DataOciServiceMeshVirtualServicesVirtualServiceCollectionList getVirtualServiceCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter">DataOciServiceMeshVirtualServicesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `meshIdInput`<sup>Optional</sup> <a name="meshIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.meshIdInput"></a>

```java
public java.lang.String getMeshIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `meshId`<sup>Required</sup> <a name="meshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.meshId"></a>

```java
public java.lang.String getMeshId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServices.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshVirtualServicesConfig <a name="DataOciServiceMeshVirtualServicesConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_services.DataOciServiceMeshVirtualServicesConfig;

DataOciServiceMeshVirtualServicesConfig.builder()
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciServiceMeshVirtualServicesFilter>)
//  .id(java.lang.String)
//  .meshId(java.lang.String)
//  .name(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#compartment_id DataOciServiceMeshVirtualServices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter">DataOciServiceMeshVirtualServicesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#id DataOciServiceMeshVirtualServices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.meshId">meshId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#mesh_id DataOciServiceMeshVirtualServices#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#name DataOciServiceMeshVirtualServices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#state DataOciServiceMeshVirtualServices#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#compartment_id DataOciServiceMeshVirtualServices#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter">DataOciServiceMeshVirtualServicesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#filter DataOciServiceMeshVirtualServices#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#id DataOciServiceMeshVirtualServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshId`<sup>Optional</sup> <a name="meshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.meshId"></a>

```java
public java.lang.String getMeshId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#mesh_id DataOciServiceMeshVirtualServices#mesh_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#name DataOciServiceMeshVirtualServices#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#state DataOciServiceMeshVirtualServices#state}.

---

### DataOciServiceMeshVirtualServicesFilter <a name="DataOciServiceMeshVirtualServicesFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_services.DataOciServiceMeshVirtualServicesFilter;

DataOciServiceMeshVirtualServicesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#name DataOciServiceMeshVirtualServices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#values DataOciServiceMeshVirtualServices#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#regex DataOciServiceMeshVirtualServices#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#name DataOciServiceMeshVirtualServices#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#values DataOciServiceMeshVirtualServices#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_virtual_services#regex DataOciServiceMeshVirtualServices#regex}.

---

### DataOciServiceMeshVirtualServicesVirtualServiceCollection <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_services.DataOciServiceMeshVirtualServicesVirtualServiceCollection;

DataOciServiceMeshVirtualServicesVirtualServiceCollection.builder()
    .build();
```


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_services.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems;

DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems.builder()
    .build();
```


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_services.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy;

DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy.builder()
    .build();
```


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_services.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls;

DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshVirtualServicesFilterList <a name="DataOciServiceMeshVirtualServicesFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_services.DataOciServiceMeshVirtualServicesFilterList;

new DataOciServiceMeshVirtualServicesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.get"></a>

```java
public DataOciServiceMeshVirtualServicesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter">DataOciServiceMeshVirtualServicesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter">DataOciServiceMeshVirtualServicesFilter</a>>

---


### DataOciServiceMeshVirtualServicesFilterOutputReference <a name="DataOciServiceMeshVirtualServicesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_services.DataOciServiceMeshVirtualServicesFilterOutputReference;

new DataOciServiceMeshVirtualServicesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter">DataOciServiceMeshVirtualServicesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesFilter">DataOciServiceMeshVirtualServicesFilter</a>

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_services.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList;

new DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.get"></a>

```java
public DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_services.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference;

new DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicy</a>

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_services.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList;

new DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.get"></a>

```java
public DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_services.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList;

new DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.get"></a>

```java
public DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_services.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference;

new DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.maximumValidity">maximumValidity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `maximumValidity`<sup>Required</sup> <a name="maximumValidity" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.maximumValidity"></a>

```java
public java.lang.Number getMaximumValidity();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtls</a>

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_services.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference;

new DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.defaultRoutingPolicy">defaultRoutingPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.meshId">meshId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.mtls">mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `defaultRoutingPolicy`<sup>Required</sup> <a name="defaultRoutingPolicy" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.defaultRoutingPolicy"></a>

```java
public DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList getDefaultRoutingPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsDefaultRoutingPolicyList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `meshId`<sup>Required</sup> <a name="meshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.meshId"></a>

```java
public java.lang.String getMeshId();
```

- *Type:* java.lang.String

---

##### `mtls`<sup>Required</sup> <a name="mtls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.mtls"></a>

```java
public DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList getMtls();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsMtlsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItems</a>

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionList <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_services.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList;

new DataOciServiceMeshVirtualServicesVirtualServiceCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.get"></a>

```java
public DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference <a name="DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_virtual_services.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference;

new DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollection">DataOciServiceMeshVirtualServicesVirtualServiceCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.items"></a>

```java
public DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList">DataOciServiceMeshVirtualServicesVirtualServiceCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollectionOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshVirtualServicesVirtualServiceCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshVirtualServices.DataOciServiceMeshVirtualServicesVirtualServiceCollection">DataOciServiceMeshVirtualServicesVirtualServiceCollection</a>

---



