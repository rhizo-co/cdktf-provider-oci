# `serviceMeshVirtualDeployment` Submodule <a name="`serviceMeshVirtualDeployment` Submodule" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceMeshVirtualDeployment <a name="ServiceMeshVirtualDeployment" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment oci_service_mesh_virtual_deployment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_virtual_deployment.ServiceMeshVirtualDeployment;

ServiceMeshVirtualDeployment.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .virtualServiceId(java.lang.String)
//  .accessLogging(ServiceMeshVirtualDeploymentAccessLogging)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .listeners(IResolvable)
//  .listeners(java.util.List<ServiceMeshVirtualDeploymentListeners>)
//  .serviceDiscovery(ServiceMeshVirtualDeploymentServiceDiscovery)
//  .timeouts(ServiceMeshVirtualDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#compartment_id ServiceMeshVirtualDeployment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#name ServiceMeshVirtualDeployment#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.virtualServiceId">virtualServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#virtual_service_id ServiceMeshVirtualDeployment#virtual_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.accessLogging">accessLogging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a></code> | access_logging block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#defined_tags ServiceMeshVirtualDeployment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#description ServiceMeshVirtualDeployment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#freeform_tags ServiceMeshVirtualDeployment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#id ServiceMeshVirtualDeployment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.listeners">listeners</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>></code> | listeners block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.serviceDiscovery">serviceDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a></code> | service_discovery block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#compartment_id ServiceMeshVirtualDeployment#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#name ServiceMeshVirtualDeployment#name}.

---

##### `virtualServiceId`<sup>Required</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.virtualServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#virtual_service_id ServiceMeshVirtualDeployment#virtual_service_id}.

---

##### `accessLogging`<sup>Optional</sup> <a name="accessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.accessLogging"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a>

access_logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#access_logging ServiceMeshVirtualDeployment#access_logging}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#defined_tags ServiceMeshVirtualDeployment#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#description ServiceMeshVirtualDeployment#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#freeform_tags ServiceMeshVirtualDeployment#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#id ServiceMeshVirtualDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listeners`<sup>Optional</sup> <a name="listeners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.listeners"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>>

listeners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#listeners ServiceMeshVirtualDeployment#listeners}

---

##### `serviceDiscovery`<sup>Optional</sup> <a name="serviceDiscovery" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.serviceDiscovery"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a>

service_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#service_discovery ServiceMeshVirtualDeployment#service_discovery}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#timeouts ServiceMeshVirtualDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putAccessLogging">putAccessLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putListeners">putListeners</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putServiceDiscovery">putServiceDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetAccessLogging">resetAccessLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetListeners">resetListeners</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetServiceDiscovery">resetServiceDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessLogging` <a name="putAccessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putAccessLogging"></a>

```java
public void putAccessLogging(ServiceMeshVirtualDeploymentAccessLogging value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putAccessLogging.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a>

---

##### `putListeners` <a name="putListeners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putListeners"></a>

```java
public void putListeners(IResolvable OR java.util.List<ServiceMeshVirtualDeploymentListeners> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putListeners.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>>

---

##### `putServiceDiscovery` <a name="putServiceDiscovery" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putServiceDiscovery"></a>

```java
public void putServiceDiscovery(ServiceMeshVirtualDeploymentServiceDiscovery value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putServiceDiscovery.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putTimeouts"></a>

```java
public void putTimeouts(ServiceMeshVirtualDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a>

---

##### `resetAccessLogging` <a name="resetAccessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetAccessLogging"></a>

```java
public void resetAccessLogging()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetListeners` <a name="resetListeners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetListeners"></a>

```java
public void resetListeners()
```

##### `resetServiceDiscovery` <a name="resetServiceDiscovery" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetServiceDiscovery"></a>

```java
public void resetServiceDiscovery()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceMeshVirtualDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_virtual_deployment.ServiceMeshVirtualDeployment;

ServiceMeshVirtualDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_virtual_deployment.ServiceMeshVirtualDeployment;

ServiceMeshVirtualDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_virtual_deployment.ServiceMeshVirtualDeployment;

ServiceMeshVirtualDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_virtual_deployment.ServiceMeshVirtualDeployment;

ServiceMeshVirtualDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServiceMeshVirtualDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ServiceMeshVirtualDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServiceMeshVirtualDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServiceMeshVirtualDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ServiceMeshVirtualDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.accessLogging">accessLogging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference">ServiceMeshVirtualDeploymentAccessLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.listeners">listeners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList">ServiceMeshVirtualDeploymentListenersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.serviceDiscovery">serviceDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference">ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference">ServiceMeshVirtualDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.accessLoggingInput">accessLoggingInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.listenersInput">listenersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.serviceDiscoveryInput">serviceDiscoveryInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.virtualServiceIdInput">virtualServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.virtualServiceId">virtualServiceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessLogging`<sup>Required</sup> <a name="accessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.accessLogging"></a>

```java
public ServiceMeshVirtualDeploymentAccessLoggingOutputReference getAccessLogging();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference">ServiceMeshVirtualDeploymentAccessLoggingOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `listeners`<sup>Required</sup> <a name="listeners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.listeners"></a>

```java
public ServiceMeshVirtualDeploymentListenersList getListeners();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList">ServiceMeshVirtualDeploymentListenersList</a>

---

##### `serviceDiscovery`<sup>Required</sup> <a name="serviceDiscovery" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.serviceDiscovery"></a>

```java
public ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference getServiceDiscovery();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference">ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeouts"></a>

```java
public ServiceMeshVirtualDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference">ServiceMeshVirtualDeploymentTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `accessLoggingInput`<sup>Optional</sup> <a name="accessLoggingInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.accessLoggingInput"></a>

```java
public ServiceMeshVirtualDeploymentAccessLogging getAccessLoggingInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `listenersInput`<sup>Optional</sup> <a name="listenersInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.listenersInput"></a>

```java
public java.lang.Object getListenersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `serviceDiscoveryInput`<sup>Optional</sup> <a name="serviceDiscoveryInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.serviceDiscoveryInput"></a>

```java
public ServiceMeshVirtualDeploymentServiceDiscovery getServiceDiscoveryInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a>

---

##### `virtualServiceIdInput`<sup>Optional</sup> <a name="virtualServiceIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.virtualServiceIdInput"></a>

```java
public java.lang.String getVirtualServiceIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `virtualServiceId`<sup>Required</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.virtualServiceId"></a>

```java
public java.lang.String getVirtualServiceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceMeshVirtualDeploymentAccessLogging <a name="ServiceMeshVirtualDeploymentAccessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_virtual_deployment.ServiceMeshVirtualDeploymentAccessLogging;

ServiceMeshVirtualDeploymentAccessLogging.builder()
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#is_enabled ServiceMeshVirtualDeployment#is_enabled}. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#is_enabled ServiceMeshVirtualDeployment#is_enabled}.

---

### ServiceMeshVirtualDeploymentConfig <a name="ServiceMeshVirtualDeploymentConfig" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_virtual_deployment.ServiceMeshVirtualDeploymentConfig;

ServiceMeshVirtualDeploymentConfig.builder()
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
    .name(java.lang.String)
    .virtualServiceId(java.lang.String)
//  .accessLogging(ServiceMeshVirtualDeploymentAccessLogging)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .listeners(IResolvable)
//  .listeners(java.util.List<ServiceMeshVirtualDeploymentListeners>)
//  .serviceDiscovery(ServiceMeshVirtualDeploymentServiceDiscovery)
//  .timeouts(ServiceMeshVirtualDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#compartment_id ServiceMeshVirtualDeployment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#name ServiceMeshVirtualDeployment#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.virtualServiceId">virtualServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#virtual_service_id ServiceMeshVirtualDeployment#virtual_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.accessLogging">accessLogging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a></code> | access_logging block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#defined_tags ServiceMeshVirtualDeployment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#description ServiceMeshVirtualDeployment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#freeform_tags ServiceMeshVirtualDeployment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#id ServiceMeshVirtualDeployment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.listeners">listeners</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>></code> | listeners block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.serviceDiscovery">serviceDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a></code> | service_discovery block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#compartment_id ServiceMeshVirtualDeployment#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#name ServiceMeshVirtualDeployment#name}.

---

##### `virtualServiceId`<sup>Required</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.virtualServiceId"></a>

```java
public java.lang.String getVirtualServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#virtual_service_id ServiceMeshVirtualDeployment#virtual_service_id}.

---

##### `accessLogging`<sup>Optional</sup> <a name="accessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.accessLogging"></a>

```java
public ServiceMeshVirtualDeploymentAccessLogging getAccessLogging();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a>

access_logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#access_logging ServiceMeshVirtualDeployment#access_logging}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#defined_tags ServiceMeshVirtualDeployment#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#description ServiceMeshVirtualDeployment#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#freeform_tags ServiceMeshVirtualDeployment#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#id ServiceMeshVirtualDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listeners`<sup>Optional</sup> <a name="listeners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.listeners"></a>

```java
public java.lang.Object getListeners();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>>

listeners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#listeners ServiceMeshVirtualDeployment#listeners}

---

##### `serviceDiscovery`<sup>Optional</sup> <a name="serviceDiscovery" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.serviceDiscovery"></a>

```java
public ServiceMeshVirtualDeploymentServiceDiscovery getServiceDiscovery();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a>

service_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#service_discovery ServiceMeshVirtualDeployment#service_discovery}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.timeouts"></a>

```java
public ServiceMeshVirtualDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#timeouts ServiceMeshVirtualDeployment#timeouts}

---

### ServiceMeshVirtualDeploymentListeners <a name="ServiceMeshVirtualDeploymentListeners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_virtual_deployment.ServiceMeshVirtualDeploymentListeners;

ServiceMeshVirtualDeploymentListeners.builder()
    .port(java.lang.Number)
    .protocol(java.lang.String)
//  .idleTimeoutInMs(java.lang.String)
//  .requestTimeoutInMs(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#port ServiceMeshVirtualDeployment#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#protocol ServiceMeshVirtualDeployment#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.idleTimeoutInMs">idleTimeoutInMs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#idle_timeout_in_ms ServiceMeshVirtualDeployment#idle_timeout_in_ms}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.requestTimeoutInMs">requestTimeoutInMs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#request_timeout_in_ms ServiceMeshVirtualDeployment#request_timeout_in_ms}. |

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#port ServiceMeshVirtualDeployment#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#protocol ServiceMeshVirtualDeployment#protocol}.

---

##### `idleTimeoutInMs`<sup>Optional</sup> <a name="idleTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.idleTimeoutInMs"></a>

```java
public java.lang.String getIdleTimeoutInMs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#idle_timeout_in_ms ServiceMeshVirtualDeployment#idle_timeout_in_ms}.

---

##### `requestTimeoutInMs`<sup>Optional</sup> <a name="requestTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.requestTimeoutInMs"></a>

```java
public java.lang.String getRequestTimeoutInMs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#request_timeout_in_ms ServiceMeshVirtualDeployment#request_timeout_in_ms}.

---

### ServiceMeshVirtualDeploymentServiceDiscovery <a name="ServiceMeshVirtualDeploymentServiceDiscovery" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_virtual_deployment.ServiceMeshVirtualDeploymentServiceDiscovery;

ServiceMeshVirtualDeploymentServiceDiscovery.builder()
    .type(java.lang.String)
//  .hostname(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#type ServiceMeshVirtualDeployment#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#hostname ServiceMeshVirtualDeployment#hostname}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#type ServiceMeshVirtualDeployment#type}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#hostname ServiceMeshVirtualDeployment#hostname}.

---

### ServiceMeshVirtualDeploymentTimeouts <a name="ServiceMeshVirtualDeploymentTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_virtual_deployment.ServiceMeshVirtualDeploymentTimeouts;

ServiceMeshVirtualDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#create ServiceMeshVirtualDeployment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#delete ServiceMeshVirtualDeployment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#update ServiceMeshVirtualDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#create ServiceMeshVirtualDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#delete ServiceMeshVirtualDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#update ServiceMeshVirtualDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceMeshVirtualDeploymentAccessLoggingOutputReference <a name="ServiceMeshVirtualDeploymentAccessLoggingOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_virtual_deployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference;

new ServiceMeshVirtualDeploymentAccessLoggingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.internalValue"></a>

```java
public ServiceMeshVirtualDeploymentAccessLogging getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a>

---


### ServiceMeshVirtualDeploymentListenersList <a name="ServiceMeshVirtualDeploymentListenersList" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_virtual_deployment.ServiceMeshVirtualDeploymentListenersList;

new ServiceMeshVirtualDeploymentListenersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.get"></a>

```java
public ServiceMeshVirtualDeploymentListenersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>>

---


### ServiceMeshVirtualDeploymentListenersOutputReference <a name="ServiceMeshVirtualDeploymentListenersOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_virtual_deployment.ServiceMeshVirtualDeploymentListenersOutputReference;

new ServiceMeshVirtualDeploymentListenersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.resetIdleTimeoutInMs">resetIdleTimeoutInMs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.resetRequestTimeoutInMs">resetRequestTimeoutInMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTimeoutInMs` <a name="resetIdleTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.resetIdleTimeoutInMs"></a>

```java
public void resetIdleTimeoutInMs()
```

##### `resetRequestTimeoutInMs` <a name="resetRequestTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.resetRequestTimeoutInMs"></a>

```java
public void resetRequestTimeoutInMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.idleTimeoutInMsInput">idleTimeoutInMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.requestTimeoutInMsInput">requestTimeoutInMsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.idleTimeoutInMs">idleTimeoutInMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.requestTimeoutInMs">requestTimeoutInMs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInMsInput`<sup>Optional</sup> <a name="idleTimeoutInMsInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.idleTimeoutInMsInput"></a>

```java
public java.lang.String getIdleTimeoutInMsInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `requestTimeoutInMsInput`<sup>Optional</sup> <a name="requestTimeoutInMsInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.requestTimeoutInMsInput"></a>

```java
public java.lang.String getRequestTimeoutInMsInput();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInMs`<sup>Required</sup> <a name="idleTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.idleTimeoutInMs"></a>

```java
public java.lang.String getIdleTimeoutInMs();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `requestTimeoutInMs`<sup>Required</sup> <a name="requestTimeoutInMs" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.requestTimeoutInMs"></a>

```java
public java.lang.String getRequestTimeoutInMs();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>

---


### ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference <a name="ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_virtual_deployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference;

new ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.resetHostname">resetHostname</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostname` <a name="resetHostname" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.resetHostname"></a>

```java
public void resetHostname()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.internalValue"></a>

```java
public ServiceMeshVirtualDeploymentServiceDiscovery getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a>

---


### ServiceMeshVirtualDeploymentTimeoutsOutputReference <a name="ServiceMeshVirtualDeploymentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_virtual_deployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference;

new ServiceMeshVirtualDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a>

---



