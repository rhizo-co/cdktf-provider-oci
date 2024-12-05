# `serviceMeshIngressGateway` Submodule <a name="`serviceMeshIngressGateway` Submodule" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceMeshIngressGateway <a name="ServiceMeshIngressGateway" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway oci_service_mesh_ingress_gateway}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGateway;

ServiceMeshIngressGateway.Builder.create(Construct scope, java.lang.String id)
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
    .hosts(IResolvable)
    .hosts(java.util.List<ServiceMeshIngressGatewayHosts>)
    .meshId(java.lang.String)
    .name(java.lang.String)
//  .accessLogging(ServiceMeshIngressGatewayAccessLogging)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .mtls(ServiceMeshIngressGatewayMtls)
//  .timeouts(ServiceMeshIngressGatewayTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#compartment_id ServiceMeshIngressGateway#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.hosts">hosts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts">ServiceMeshIngressGatewayHosts</a>></code> | hosts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.meshId">meshId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mesh_id ServiceMeshIngressGateway#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#name ServiceMeshIngressGateway#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.accessLogging">accessLogging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a></code> | access_logging block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#defined_tags ServiceMeshIngressGateway#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#description ServiceMeshIngressGateway#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#freeform_tags ServiceMeshIngressGateway#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#id ServiceMeshIngressGateway#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.mtls">mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a></code> | mtls block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#compartment_id ServiceMeshIngressGateway#compartment_id}.

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.hosts"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts">ServiceMeshIngressGatewayHosts</a>>

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#hosts ServiceMeshIngressGateway#hosts}

---

##### `meshId`<sup>Required</sup> <a name="meshId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.meshId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mesh_id ServiceMeshIngressGateway#mesh_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#name ServiceMeshIngressGateway#name}.

---

##### `accessLogging`<sup>Optional</sup> <a name="accessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.accessLogging"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a>

access_logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#access_logging ServiceMeshIngressGateway#access_logging}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#defined_tags ServiceMeshIngressGateway#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#description ServiceMeshIngressGateway#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#freeform_tags ServiceMeshIngressGateway#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#id ServiceMeshIngressGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mtls`<sup>Optional</sup> <a name="mtls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.mtls"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a>

mtls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mtls ServiceMeshIngressGateway#mtls}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#timeouts ServiceMeshIngressGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putAccessLogging">putAccessLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putHosts">putHosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putMtls">putMtls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetAccessLogging">resetAccessLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetMtls">resetMtls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessLogging` <a name="putAccessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putAccessLogging"></a>

```java
public void putAccessLogging(ServiceMeshIngressGatewayAccessLogging value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putAccessLogging.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a>

---

##### `putHosts` <a name="putHosts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putHosts"></a>

```java
public void putHosts(IResolvable OR java.util.List<ServiceMeshIngressGatewayHosts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putHosts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts">ServiceMeshIngressGatewayHosts</a>>

---

##### `putMtls` <a name="putMtls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putMtls"></a>

```java
public void putMtls(ServiceMeshIngressGatewayMtls value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putMtls.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putTimeouts"></a>

```java
public void putTimeouts(ServiceMeshIngressGatewayTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a>

---

##### `resetAccessLogging` <a name="resetAccessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetAccessLogging"></a>

```java
public void resetAccessLogging()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetId"></a>

```java
public void resetId()
```

##### `resetMtls` <a name="resetMtls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetMtls"></a>

```java
public void resetMtls()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceMeshIngressGateway resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGateway;

ServiceMeshIngressGateway.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGateway;

ServiceMeshIngressGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGateway;

ServiceMeshIngressGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGateway;

ServiceMeshIngressGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServiceMeshIngressGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ServiceMeshIngressGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServiceMeshIngressGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServiceMeshIngressGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ServiceMeshIngressGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.accessLogging">accessLogging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference">ServiceMeshIngressGatewayAccessLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.hosts">hosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList">ServiceMeshIngressGatewayHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.mtls">mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference">ServiceMeshIngressGatewayMtlsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference">ServiceMeshIngressGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.accessLoggingInput">accessLoggingInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.hostsInput">hostsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts">ServiceMeshIngressGatewayHosts</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.meshIdInput">meshIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.mtlsInput">mtlsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.meshId">meshId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessLogging`<sup>Required</sup> <a name="accessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.accessLogging"></a>

```java
public ServiceMeshIngressGatewayAccessLoggingOutputReference getAccessLogging();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference">ServiceMeshIngressGatewayAccessLoggingOutputReference</a>

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.hosts"></a>

```java
public ServiceMeshIngressGatewayHostsList getHosts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList">ServiceMeshIngressGatewayHostsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `mtls`<sup>Required</sup> <a name="mtls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.mtls"></a>

```java
public ServiceMeshIngressGatewayMtlsOutputReference getMtls();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference">ServiceMeshIngressGatewayMtlsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeouts"></a>

```java
public ServiceMeshIngressGatewayTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference">ServiceMeshIngressGatewayTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `accessLoggingInput`<sup>Optional</sup> <a name="accessLoggingInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.accessLoggingInput"></a>

```java
public ServiceMeshIngressGatewayAccessLogging getAccessLoggingInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.hostsInput"></a>

```java
public java.lang.Object getHostsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts">ServiceMeshIngressGatewayHosts</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `meshIdInput`<sup>Optional</sup> <a name="meshIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.meshIdInput"></a>

```java
public java.lang.String getMeshIdInput();
```

- *Type:* java.lang.String

---

##### `mtlsInput`<sup>Optional</sup> <a name="mtlsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.mtlsInput"></a>

```java
public ServiceMeshIngressGatewayMtls getMtlsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `meshId`<sup>Required</sup> <a name="meshId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.meshId"></a>

```java
public java.lang.String getMeshId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceMeshIngressGatewayAccessLogging <a name="ServiceMeshIngressGatewayAccessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGatewayAccessLogging;

ServiceMeshIngressGatewayAccessLogging.builder()
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#is_enabled ServiceMeshIngressGateway#is_enabled}. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#is_enabled ServiceMeshIngressGateway#is_enabled}.

---

### ServiceMeshIngressGatewayConfig <a name="ServiceMeshIngressGatewayConfig" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGatewayConfig;

ServiceMeshIngressGatewayConfig.builder()
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
    .hosts(IResolvable)
    .hosts(java.util.List<ServiceMeshIngressGatewayHosts>)
    .meshId(java.lang.String)
    .name(java.lang.String)
//  .accessLogging(ServiceMeshIngressGatewayAccessLogging)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .mtls(ServiceMeshIngressGatewayMtls)
//  .timeouts(ServiceMeshIngressGatewayTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#compartment_id ServiceMeshIngressGateway#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.hosts">hosts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts">ServiceMeshIngressGatewayHosts</a>></code> | hosts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.meshId">meshId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mesh_id ServiceMeshIngressGateway#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#name ServiceMeshIngressGateway#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.accessLogging">accessLogging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a></code> | access_logging block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#defined_tags ServiceMeshIngressGateway#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#description ServiceMeshIngressGateway#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#freeform_tags ServiceMeshIngressGateway#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#id ServiceMeshIngressGateway#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.mtls">mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a></code> | mtls block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#compartment_id ServiceMeshIngressGateway#compartment_id}.

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.hosts"></a>

```java
public java.lang.Object getHosts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts">ServiceMeshIngressGatewayHosts</a>>

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#hosts ServiceMeshIngressGateway#hosts}

---

##### `meshId`<sup>Required</sup> <a name="meshId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.meshId"></a>

```java
public java.lang.String getMeshId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mesh_id ServiceMeshIngressGateway#mesh_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#name ServiceMeshIngressGateway#name}.

---

##### `accessLogging`<sup>Optional</sup> <a name="accessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.accessLogging"></a>

```java
public ServiceMeshIngressGatewayAccessLogging getAccessLogging();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a>

access_logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#access_logging ServiceMeshIngressGateway#access_logging}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#defined_tags ServiceMeshIngressGateway#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#description ServiceMeshIngressGateway#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#freeform_tags ServiceMeshIngressGateway#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#id ServiceMeshIngressGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mtls`<sup>Optional</sup> <a name="mtls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.mtls"></a>

```java
public ServiceMeshIngressGatewayMtls getMtls();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a>

mtls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mtls ServiceMeshIngressGateway#mtls}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.timeouts"></a>

```java
public ServiceMeshIngressGatewayTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#timeouts ServiceMeshIngressGateway#timeouts}

---

### ServiceMeshIngressGatewayHosts <a name="ServiceMeshIngressGatewayHosts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGatewayHosts;

ServiceMeshIngressGatewayHosts.builder()
    .listeners(IResolvable)
    .listeners(java.util.List<ServiceMeshIngressGatewayHostsListeners>)
    .name(java.lang.String)
//  .hostnames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.listeners">listeners</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners">ServiceMeshIngressGatewayHostsListeners</a>></code> | listeners block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#name ServiceMeshIngressGateway#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#hostnames ServiceMeshIngressGateway#hostnames}. |

---

##### `listeners`<sup>Required</sup> <a name="listeners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.listeners"></a>

```java
public java.lang.Object getListeners();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners">ServiceMeshIngressGatewayHostsListeners</a>>

listeners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#listeners ServiceMeshIngressGateway#listeners}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#name ServiceMeshIngressGateway#name}.

---

##### `hostnames`<sup>Optional</sup> <a name="hostnames" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#hostnames ServiceMeshIngressGateway#hostnames}.

---

### ServiceMeshIngressGatewayHostsListeners <a name="ServiceMeshIngressGatewayHostsListeners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGatewayHostsListeners;

ServiceMeshIngressGatewayHostsListeners.builder()
    .port(java.lang.Number)
    .protocol(java.lang.String)
//  .tls(ServiceMeshIngressGatewayHostsListenersTls)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#port ServiceMeshIngressGateway#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#protocol ServiceMeshIngressGateway#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.tls">tls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a></code> | tls block. |

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#port ServiceMeshIngressGateway#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#protocol ServiceMeshIngressGateway#protocol}.

---

##### `tls`<sup>Optional</sup> <a name="tls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.tls"></a>

```java
public ServiceMeshIngressGatewayHostsListenersTls getTls();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a>

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#tls ServiceMeshIngressGateway#tls}

---

### ServiceMeshIngressGatewayHostsListenersTls <a name="ServiceMeshIngressGatewayHostsListenersTls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGatewayHostsListenersTls;

ServiceMeshIngressGatewayHostsListenersTls.builder()
    .mode(java.lang.String)
//  .clientValidation(ServiceMeshIngressGatewayHostsListenersTlsClientValidation)
//  .serverCertificate(ServiceMeshIngressGatewayHostsListenersTlsServerCertificate)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mode ServiceMeshIngressGateway#mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.clientValidation">clientValidation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a></code> | client_validation block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.serverCertificate">serverCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a></code> | server_certificate block. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mode ServiceMeshIngressGateway#mode}.

---

##### `clientValidation`<sup>Optional</sup> <a name="clientValidation" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.clientValidation"></a>

```java
public ServiceMeshIngressGatewayHostsListenersTlsClientValidation getClientValidation();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a>

client_validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#client_validation ServiceMeshIngressGateway#client_validation}

---

##### `serverCertificate`<sup>Optional</sup> <a name="serverCertificate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.serverCertificate"></a>

```java
public ServiceMeshIngressGatewayHostsListenersTlsServerCertificate getServerCertificate();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a>

server_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#server_certificate ServiceMeshIngressGateway#server_certificate}

---

### ServiceMeshIngressGatewayHostsListenersTlsClientValidation <a name="ServiceMeshIngressGatewayHostsListenersTlsClientValidation" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation;

ServiceMeshIngressGatewayHostsListenersTlsClientValidation.builder()
//  .subjectAlternateNames(java.util.List<java.lang.String>)
//  .trustedCaBundle(ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation.property.subjectAlternateNames">subjectAlternateNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#subject_alternate_names ServiceMeshIngressGateway#subject_alternate_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation.property.trustedCaBundle">trustedCaBundle</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a></code> | trusted_ca_bundle block. |

---

##### `subjectAlternateNames`<sup>Optional</sup> <a name="subjectAlternateNames" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation.property.subjectAlternateNames"></a>

```java
public java.util.List<java.lang.String> getSubjectAlternateNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#subject_alternate_names ServiceMeshIngressGateway#subject_alternate_names}.

---

##### `trustedCaBundle`<sup>Optional</sup> <a name="trustedCaBundle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation.property.trustedCaBundle"></a>

```java
public ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle getTrustedCaBundle();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a>

trusted_ca_bundle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#trusted_ca_bundle ServiceMeshIngressGateway#trusted_ca_bundle}

---

### ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle <a name="ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle;

ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.builder()
    .type(java.lang.String)
//  .caBundleId(java.lang.String)
//  .secretName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#type ServiceMeshIngressGateway#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.caBundleId">caBundleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#ca_bundle_id ServiceMeshIngressGateway#ca_bundle_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.secretName">secretName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#secret_name ServiceMeshIngressGateway#secret_name}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#type ServiceMeshIngressGateway#type}.

---

##### `caBundleId`<sup>Optional</sup> <a name="caBundleId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.caBundleId"></a>

```java
public java.lang.String getCaBundleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#ca_bundle_id ServiceMeshIngressGateway#ca_bundle_id}.

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#secret_name ServiceMeshIngressGateway#secret_name}.

---

### ServiceMeshIngressGatewayHostsListenersTlsServerCertificate <a name="ServiceMeshIngressGatewayHostsListenersTlsServerCertificate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate;

ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.builder()
    .type(java.lang.String)
//  .certificateId(java.lang.String)
//  .secretName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#type ServiceMeshIngressGateway#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#certificate_id ServiceMeshIngressGateway#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.secretName">secretName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#secret_name ServiceMeshIngressGateway#secret_name}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#type ServiceMeshIngressGateway#type}.

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#certificate_id ServiceMeshIngressGateway#certificate_id}.

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#secret_name ServiceMeshIngressGateway#secret_name}.

---

### ServiceMeshIngressGatewayMtls <a name="ServiceMeshIngressGatewayMtls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGatewayMtls;

ServiceMeshIngressGatewayMtls.builder()
//  .maximumValidity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls.property.maximumValidity">maximumValidity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#maximum_validity ServiceMeshIngressGateway#maximum_validity}. |

---

##### `maximumValidity`<sup>Optional</sup> <a name="maximumValidity" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls.property.maximumValidity"></a>

```java
public java.lang.Number getMaximumValidity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#maximum_validity ServiceMeshIngressGateway#maximum_validity}.

---

### ServiceMeshIngressGatewayTimeouts <a name="ServiceMeshIngressGatewayTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGatewayTimeouts;

ServiceMeshIngressGatewayTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#create ServiceMeshIngressGateway#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#delete ServiceMeshIngressGateway#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#update ServiceMeshIngressGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#create ServiceMeshIngressGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#delete ServiceMeshIngressGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#update ServiceMeshIngressGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceMeshIngressGatewayAccessLoggingOutputReference <a name="ServiceMeshIngressGatewayAccessLoggingOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGatewayAccessLoggingOutputReference;

new ServiceMeshIngressGatewayAccessLoggingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.internalValue"></a>

```java
public ServiceMeshIngressGatewayAccessLogging getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a>

---


### ServiceMeshIngressGatewayHostsList <a name="ServiceMeshIngressGatewayHostsList" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGatewayHostsList;

new ServiceMeshIngressGatewayHostsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.get"></a>

```java
public ServiceMeshIngressGatewayHostsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts">ServiceMeshIngressGatewayHosts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts">ServiceMeshIngressGatewayHosts</a>>

---


### ServiceMeshIngressGatewayHostsListenersList <a name="ServiceMeshIngressGatewayHostsListenersList" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGatewayHostsListenersList;

new ServiceMeshIngressGatewayHostsListenersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.get"></a>

```java
public ServiceMeshIngressGatewayHostsListenersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners">ServiceMeshIngressGatewayHostsListeners</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners">ServiceMeshIngressGatewayHostsListeners</a>>

---


### ServiceMeshIngressGatewayHostsListenersOutputReference <a name="ServiceMeshIngressGatewayHostsListenersOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGatewayHostsListenersOutputReference;

new ServiceMeshIngressGatewayHostsListenersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.putTls">putTls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.resetTls">resetTls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTls` <a name="putTls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.putTls"></a>

```java
public void putTls(ServiceMeshIngressGatewayHostsListenersTls value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.putTls.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a>

---

##### `resetTls` <a name="resetTls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.resetTls"></a>

```java
public void resetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.tls">tls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference">ServiceMeshIngressGatewayHostsListenersTlsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.tlsInput">tlsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners">ServiceMeshIngressGatewayHostsListeners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tls`<sup>Required</sup> <a name="tls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.tls"></a>

```java
public ServiceMeshIngressGatewayHostsListenersTlsOutputReference getTls();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference">ServiceMeshIngressGatewayHostsListenersTlsOutputReference</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.tlsInput"></a>

```java
public ServiceMeshIngressGatewayHostsListenersTls getTlsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a>

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners">ServiceMeshIngressGatewayHostsListeners</a>

---


### ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference <a name="ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference;

new ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.putTrustedCaBundle">putTrustedCaBundle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resetSubjectAlternateNames">resetSubjectAlternateNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resetTrustedCaBundle">resetTrustedCaBundle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrustedCaBundle` <a name="putTrustedCaBundle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.putTrustedCaBundle"></a>

```java
public void putTrustedCaBundle(ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.putTrustedCaBundle.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a>

---

##### `resetSubjectAlternateNames` <a name="resetSubjectAlternateNames" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resetSubjectAlternateNames"></a>

```java
public void resetSubjectAlternateNames()
```

##### `resetTrustedCaBundle` <a name="resetTrustedCaBundle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resetTrustedCaBundle"></a>

```java
public void resetTrustedCaBundle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.trustedCaBundle">trustedCaBundle</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNamesInput">subjectAlternateNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.trustedCaBundleInput">trustedCaBundleInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNames">subjectAlternateNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `trustedCaBundle`<sup>Required</sup> <a name="trustedCaBundle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.trustedCaBundle"></a>

```java
public ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference getTrustedCaBundle();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference</a>

---

##### `subjectAlternateNamesInput`<sup>Optional</sup> <a name="subjectAlternateNamesInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNamesInput"></a>

```java
public java.util.List<java.lang.String> getSubjectAlternateNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trustedCaBundleInput`<sup>Optional</sup> <a name="trustedCaBundleInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.trustedCaBundleInput"></a>

```java
public ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle getTrustedCaBundleInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a>

---

##### `subjectAlternateNames`<sup>Required</sup> <a name="subjectAlternateNames" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNames"></a>

```java
public java.util.List<java.lang.String> getSubjectAlternateNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.internalValue"></a>

```java
public ServiceMeshIngressGatewayHostsListenersTlsClientValidation getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a>

---


### ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference <a name="ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference;

new ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resetCaBundleId">resetCaBundleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resetSecretName">resetSecretName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaBundleId` <a name="resetCaBundleId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resetCaBundleId"></a>

```java
public void resetCaBundleId()
```

##### `resetSecretName` <a name="resetSecretName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resetSecretName"></a>

```java
public void resetSecretName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleIdInput">caBundleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleId">caBundleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caBundleIdInput`<sup>Optional</sup> <a name="caBundleIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleIdInput"></a>

```java
public java.lang.String getCaBundleIdInput();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `caBundleId`<sup>Required</sup> <a name="caBundleId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleId"></a>

```java
public java.lang.String getCaBundleId();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.internalValue"></a>

```java
public ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a>

---


### ServiceMeshIngressGatewayHostsListenersTlsOutputReference <a name="ServiceMeshIngressGatewayHostsListenersTlsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference;

new ServiceMeshIngressGatewayHostsListenersTlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putClientValidation">putClientValidation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putServerCertificate">putServerCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resetClientValidation">resetClientValidation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resetServerCertificate">resetServerCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientValidation` <a name="putClientValidation" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putClientValidation"></a>

```java
public void putClientValidation(ServiceMeshIngressGatewayHostsListenersTlsClientValidation value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putClientValidation.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a>

---

##### `putServerCertificate` <a name="putServerCertificate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putServerCertificate"></a>

```java
public void putServerCertificate(ServiceMeshIngressGatewayHostsListenersTlsServerCertificate value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putServerCertificate.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a>

---

##### `resetClientValidation` <a name="resetClientValidation" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resetClientValidation"></a>

```java
public void resetClientValidation()
```

##### `resetServerCertificate` <a name="resetServerCertificate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resetServerCertificate"></a>

```java
public void resetServerCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.clientValidation">clientValidation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference">ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.serverCertificate">serverCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference">ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.clientValidationInput">clientValidationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.serverCertificateInput">serverCertificateInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientValidation`<sup>Required</sup> <a name="clientValidation" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.clientValidation"></a>

```java
public ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference getClientValidation();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference">ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference</a>

---

##### `serverCertificate`<sup>Required</sup> <a name="serverCertificate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.serverCertificate"></a>

```java
public ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference getServerCertificate();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference">ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference</a>

---

##### `clientValidationInput`<sup>Optional</sup> <a name="clientValidationInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.clientValidationInput"></a>

```java
public ServiceMeshIngressGatewayHostsListenersTlsClientValidation getClientValidationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `serverCertificateInput`<sup>Optional</sup> <a name="serverCertificateInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.serverCertificateInput"></a>

```java
public ServiceMeshIngressGatewayHostsListenersTlsServerCertificate getServerCertificateInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.internalValue"></a>

```java
public ServiceMeshIngressGatewayHostsListenersTls getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a>

---


### ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference <a name="ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference;

new ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resetCertificateId">resetCertificateId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resetSecretName">resetSecretName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateId` <a name="resetCertificateId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resetCertificateId"></a>

```java
public void resetCertificateId()
```

##### `resetSecretName` <a name="resetSecretName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resetSecretName"></a>

```java
public void resetSecretName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.certificateIdInput">certificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.certificateIdInput"></a>

```java
public java.lang.String getCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.internalValue"></a>

```java
public ServiceMeshIngressGatewayHostsListenersTlsServerCertificate getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a>

---


### ServiceMeshIngressGatewayHostsOutputReference <a name="ServiceMeshIngressGatewayHostsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGatewayHostsOutputReference;

new ServiceMeshIngressGatewayHostsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.putListeners">putListeners</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.resetHostnames">resetHostnames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putListeners` <a name="putListeners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.putListeners"></a>

```java
public void putListeners(IResolvable OR java.util.List<ServiceMeshIngressGatewayHostsListeners> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.putListeners.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners">ServiceMeshIngressGatewayHostsListeners</a>>

---

##### `resetHostnames` <a name="resetHostnames" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.resetHostnames"></a>

```java
public void resetHostnames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.listeners">listeners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList">ServiceMeshIngressGatewayHostsListenersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.hostnamesInput">hostnamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.listenersInput">listenersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners">ServiceMeshIngressGatewayHostsListeners</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts">ServiceMeshIngressGatewayHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `listeners`<sup>Required</sup> <a name="listeners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.listeners"></a>

```java
public ServiceMeshIngressGatewayHostsListenersList getListeners();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList">ServiceMeshIngressGatewayHostsListenersList</a>

---

##### `hostnamesInput`<sup>Optional</sup> <a name="hostnamesInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.hostnamesInput"></a>

```java
public java.util.List<java.lang.String> getHostnamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `listenersInput`<sup>Optional</sup> <a name="listenersInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.listenersInput"></a>

```java
public java.lang.Object getListenersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners">ServiceMeshIngressGatewayHostsListeners</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts">ServiceMeshIngressGatewayHosts</a>

---


### ServiceMeshIngressGatewayMtlsOutputReference <a name="ServiceMeshIngressGatewayMtlsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGatewayMtlsOutputReference;

new ServiceMeshIngressGatewayMtlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.resetMaximumValidity">resetMaximumValidity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumValidity` <a name="resetMaximumValidity" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.resetMaximumValidity"></a>

```java
public void resetMaximumValidity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.maximumValidityInput">maximumValidityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.maximumValidity">maximumValidity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `maximumValidityInput`<sup>Optional</sup> <a name="maximumValidityInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.maximumValidityInput"></a>

```java
public java.lang.Number getMaximumValidityInput();
```

- *Type:* java.lang.Number

---

##### `maximumValidity`<sup>Required</sup> <a name="maximumValidity" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.maximumValidity"></a>

```java
public java.lang.Number getMaximumValidity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.internalValue"></a>

```java
public ServiceMeshIngressGatewayMtls getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a>

---


### ServiceMeshIngressGatewayTimeoutsOutputReference <a name="ServiceMeshIngressGatewayTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_ingress_gateway.ServiceMeshIngressGatewayTimeoutsOutputReference;

new ServiceMeshIngressGatewayTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a>

---



