# `dataOciServiceMeshIngressGateways` Submodule <a name="`dataOciServiceMeshIngressGateways` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceMeshIngressGateways <a name="DataOciServiceMeshIngressGateways" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways oci_service_mesh_ingress_gateways}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGateways;

DataOciServiceMeshIngressGateways.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataOciServiceMeshIngressGatewaysFilter>)
//  .id(java.lang.String)
//  .meshId(java.lang.String)
//  .name(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#compartment_id DataOciServiceMeshIngressGateways#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter">DataOciServiceMeshIngressGatewaysFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#id DataOciServiceMeshIngressGateways#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.meshId">meshId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#mesh_id DataOciServiceMeshIngressGateways#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#name DataOciServiceMeshIngressGateways#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#state DataOciServiceMeshIngressGateways#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#compartment_id DataOciServiceMeshIngressGateways#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter">DataOciServiceMeshIngressGatewaysFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#filter DataOciServiceMeshIngressGateways#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#id DataOciServiceMeshIngressGateways#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshId`<sup>Optional</sup> <a name="meshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.meshId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#mesh_id DataOciServiceMeshIngressGateways#mesh_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#name DataOciServiceMeshIngressGateways#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#state DataOciServiceMeshIngressGateways#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetMeshId">resetMeshId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciServiceMeshIngressGatewaysFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter">DataOciServiceMeshIngressGatewaysFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetId"></a>

```java
public void resetId()
```

##### `resetMeshId` <a name="resetMeshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetMeshId"></a>

```java
public void resetMeshId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetName"></a>

```java
public void resetName()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciServiceMeshIngressGateways resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGateways;

DataOciServiceMeshIngressGateways.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGateways;

DataOciServiceMeshIngressGateways.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGateways;

DataOciServiceMeshIngressGateways.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGateways;

DataOciServiceMeshIngressGateways.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciServiceMeshIngressGateways.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciServiceMeshIngressGateways resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciServiceMeshIngressGateways to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciServiceMeshIngressGateways that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceMeshIngressGateways to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList">DataOciServiceMeshIngressGatewaysFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.ingressGatewayCollection">ingressGatewayCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter">DataOciServiceMeshIngressGatewaysFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.meshIdInput">meshIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.meshId">meshId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.filter"></a>

```java
public DataOciServiceMeshIngressGatewaysFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList">DataOciServiceMeshIngressGatewaysFilterList</a>

---

##### `ingressGatewayCollection`<sup>Required</sup> <a name="ingressGatewayCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.ingressGatewayCollection"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList getIngressGatewayCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter">DataOciServiceMeshIngressGatewaysFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `meshIdInput`<sup>Optional</sup> <a name="meshIdInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.meshIdInput"></a>

```java
public java.lang.String getMeshIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `meshId`<sup>Required</sup> <a name="meshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.meshId"></a>

```java
public java.lang.String getMeshId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGateways.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceMeshIngressGatewaysConfig <a name="DataOciServiceMeshIngressGatewaysConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysConfig;

DataOciServiceMeshIngressGatewaysConfig.builder()
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
//  .filter(java.util.List<DataOciServiceMeshIngressGatewaysFilter>)
//  .id(java.lang.String)
//  .meshId(java.lang.String)
//  .name(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#compartment_id DataOciServiceMeshIngressGateways#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter">DataOciServiceMeshIngressGatewaysFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#id DataOciServiceMeshIngressGateways#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.meshId">meshId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#mesh_id DataOciServiceMeshIngressGateways#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#name DataOciServiceMeshIngressGateways#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#state DataOciServiceMeshIngressGateways#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#compartment_id DataOciServiceMeshIngressGateways#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter">DataOciServiceMeshIngressGatewaysFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#filter DataOciServiceMeshIngressGateways#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#id DataOciServiceMeshIngressGateways#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshId`<sup>Optional</sup> <a name="meshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.meshId"></a>

```java
public java.lang.String getMeshId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#mesh_id DataOciServiceMeshIngressGateways#mesh_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#name DataOciServiceMeshIngressGateways#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#state DataOciServiceMeshIngressGateways#state}.

---

### DataOciServiceMeshIngressGatewaysFilter <a name="DataOciServiceMeshIngressGatewaysFilter" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysFilter;

DataOciServiceMeshIngressGatewaysFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#name DataOciServiceMeshIngressGateways#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#values DataOciServiceMeshIngressGateways#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#regex DataOciServiceMeshIngressGateways#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#name DataOciServiceMeshIngressGateways#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#values DataOciServiceMeshIngressGateways#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_mesh_ingress_gateways#regex DataOciServiceMeshIngressGateways#regex}.

---

### DataOciServiceMeshIngressGatewaysIngressGatewayCollection <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollection" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollection;

DataOciServiceMeshIngressGatewaysIngressGatewayCollection.builder()
    .build();
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems;

DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems.builder()
    .build();
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging;

DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging.builder()
    .build();
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts;

DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts.builder()
    .build();
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners;

DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners.builder()
    .build();
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls;

DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls.builder()
    .build();
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation;

DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation.builder()
    .build();
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle;

DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle.builder()
    .build();
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate;

DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate.builder()
    .build();
```


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls;

DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceMeshIngressGatewaysFilterList <a name="DataOciServiceMeshIngressGatewaysFilterList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysFilterList;

new DataOciServiceMeshIngressGatewaysFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.get"></a>

```java
public DataOciServiceMeshIngressGatewaysFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter">DataOciServiceMeshIngressGatewaysFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter">DataOciServiceMeshIngressGatewaysFilter</a>>

---


### DataOciServiceMeshIngressGatewaysFilterOutputReference <a name="DataOciServiceMeshIngressGatewaysFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysFilterOutputReference;

new DataOciServiceMeshIngressGatewaysFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter">DataOciServiceMeshIngressGatewaysFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysFilter">DataOciServiceMeshIngressGatewaysFilter</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.get"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLogging</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.get"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.get"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.tls">tls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `tls`<sup>Required</sup> <a name="tls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.tls"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList getTls();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListeners</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.get"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNames">subjectAlternateNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.trustedCaBundle">trustedCaBundle</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subjectAlternateNames`<sup>Required</sup> <a name="subjectAlternateNames" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNames"></a>

```java
public java.util.List<java.lang.String> getSubjectAlternateNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trustedCaBundle`<sup>Required</sup> <a name="trustedCaBundle" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.trustedCaBundle"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList getTrustedCaBundle();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidation</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.get"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleId">caBundleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caBundleId`<sup>Required</sup> <a name="caBundleId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleId"></a>

```java
public java.lang.String getCaBundleId();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationTrustedCaBundle</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.get"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.clientValidation">clientValidation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.serverCertificate">serverCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientValidation`<sup>Required</sup> <a name="clientValidation" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.clientValidation"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList getClientValidation();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsClientValidationList</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `serverCertificate`<sup>Required</sup> <a name="serverCertificate" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.serverCertificate"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList getServerCertificate();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTls</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.get"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificateOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersTlsServerCertificate</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.listeners">listeners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `listeners`<sup>Required</sup> <a name="listeners" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.listeners"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList getListeners();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsListenersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHosts</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.get"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.get"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.maximumValidity">maximumValidity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `maximumValidity`<sup>Required</sup> <a name="maximumValidity" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.maximumValidity"></a>

```java
public java.lang.Number getMaximumValidity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtls</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.accessLogging">accessLogging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.hosts">hosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.meshId">meshId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.mtls">mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLogging`<sup>Required</sup> <a name="accessLogging" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.accessLogging"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList getAccessLogging();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsAccessLoggingList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.hosts"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList getHosts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsHostsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `meshId`<sup>Required</sup> <a name="meshId" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.meshId"></a>

```java
public java.lang.String getMeshId();
```

- *Type:* java.lang.String

---

##### `mtls`<sup>Required</sup> <a name="mtls" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.mtls"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList getMtls();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsMtlsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItems</a>

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.get"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference <a name="DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_service_mesh_ingress_gateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference;

new DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollection">DataOciServiceMeshIngressGatewaysIngressGatewayCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.items"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList">DataOciServiceMeshIngressGatewaysIngressGatewayCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollectionOutputReference.property.internalValue"></a>

```java
public DataOciServiceMeshIngressGatewaysIngressGatewayCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceMeshIngressGateways.DataOciServiceMeshIngressGatewaysIngressGatewayCollection">DataOciServiceMeshIngressGatewaysIngressGatewayCollection</a>

---



