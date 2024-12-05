# `serviceMeshAccessPolicy` Submodule <a name="`serviceMeshAccessPolicy` Submodule" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceMeshAccessPolicy <a name="ServiceMeshAccessPolicy" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy oci_service_mesh_access_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_access_policy.ServiceMeshAccessPolicy;

ServiceMeshAccessPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .meshId(java.lang.String)
    .name(java.lang.String)
    .rules(IResolvable)
    .rules(java.util.List<ServiceMeshAccessPolicyRules>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(ServiceMeshAccessPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#compartment_id ServiceMeshAccessPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.meshId">meshId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#mesh_id ServiceMeshAccessPolicy#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#name ServiceMeshAccessPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules">ServiceMeshAccessPolicyRules</a>></code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#defined_tags ServiceMeshAccessPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#description ServiceMeshAccessPolicy#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#freeform_tags ServiceMeshAccessPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#id ServiceMeshAccessPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts">ServiceMeshAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#compartment_id ServiceMeshAccessPolicy#compartment_id}.

---

##### `meshId`<sup>Required</sup> <a name="meshId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.meshId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#mesh_id ServiceMeshAccessPolicy#mesh_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#name ServiceMeshAccessPolicy#name}.

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.rules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules">ServiceMeshAccessPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#rules ServiceMeshAccessPolicy#rules}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#defined_tags ServiceMeshAccessPolicy#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#description ServiceMeshAccessPolicy#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#freeform_tags ServiceMeshAccessPolicy#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#id ServiceMeshAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts">ServiceMeshAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#timeouts ServiceMeshAccessPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.putRules">putRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<ServiceMeshAccessPolicyRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules">ServiceMeshAccessPolicyRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.putTimeouts"></a>

```java
public void putTimeouts(ServiceMeshAccessPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts">ServiceMeshAccessPolicyTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceMeshAccessPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_access_policy.ServiceMeshAccessPolicy;

ServiceMeshAccessPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_access_policy.ServiceMeshAccessPolicy;

ServiceMeshAccessPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_access_policy.ServiceMeshAccessPolicy;

ServiceMeshAccessPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_access_policy.ServiceMeshAccessPolicy;

ServiceMeshAccessPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServiceMeshAccessPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ServiceMeshAccessPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServiceMeshAccessPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServiceMeshAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ServiceMeshAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList">ServiceMeshAccessPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference">ServiceMeshAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.meshIdInput">meshIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules">ServiceMeshAccessPolicyRules</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts">ServiceMeshAccessPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.meshId">meshId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.rules"></a>

```java
public ServiceMeshAccessPolicyRulesList getRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList">ServiceMeshAccessPolicyRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.timeouts"></a>

```java
public ServiceMeshAccessPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference">ServiceMeshAccessPolicyTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `meshIdInput`<sup>Optional</sup> <a name="meshIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.meshIdInput"></a>

```java
public java.lang.String getMeshIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules">ServiceMeshAccessPolicyRules</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts">ServiceMeshAccessPolicyTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `meshId`<sup>Required</sup> <a name="meshId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.meshId"></a>

```java
public java.lang.String getMeshId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceMeshAccessPolicyConfig <a name="ServiceMeshAccessPolicyConfig" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_access_policy.ServiceMeshAccessPolicyConfig;

ServiceMeshAccessPolicyConfig.builder()
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
    .meshId(java.lang.String)
    .name(java.lang.String)
    .rules(IResolvable)
    .rules(java.util.List<ServiceMeshAccessPolicyRules>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(ServiceMeshAccessPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#compartment_id ServiceMeshAccessPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.meshId">meshId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#mesh_id ServiceMeshAccessPolicy#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#name ServiceMeshAccessPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules">ServiceMeshAccessPolicyRules</a>></code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#defined_tags ServiceMeshAccessPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#description ServiceMeshAccessPolicy#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#freeform_tags ServiceMeshAccessPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#id ServiceMeshAccessPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts">ServiceMeshAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#compartment_id ServiceMeshAccessPolicy#compartment_id}.

---

##### `meshId`<sup>Required</sup> <a name="meshId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.meshId"></a>

```java
public java.lang.String getMeshId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#mesh_id ServiceMeshAccessPolicy#mesh_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#name ServiceMeshAccessPolicy#name}.

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules">ServiceMeshAccessPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#rules ServiceMeshAccessPolicy#rules}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#defined_tags ServiceMeshAccessPolicy#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#description ServiceMeshAccessPolicy#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#freeform_tags ServiceMeshAccessPolicy#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#id ServiceMeshAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.timeouts"></a>

```java
public ServiceMeshAccessPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts">ServiceMeshAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#timeouts ServiceMeshAccessPolicy#timeouts}

---

### ServiceMeshAccessPolicyRules <a name="ServiceMeshAccessPolicyRules" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_access_policy.ServiceMeshAccessPolicyRules;

ServiceMeshAccessPolicyRules.builder()
    .action(java.lang.String)
    .destination(ServiceMeshAccessPolicyRulesDestination)
    .source(ServiceMeshAccessPolicyRulesSource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#action ServiceMeshAccessPolicy#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules.property.destination">destination</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination">ServiceMeshAccessPolicyRulesDestination</a></code> | destination block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource">ServiceMeshAccessPolicyRulesSource</a></code> | source block. |

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#action ServiceMeshAccessPolicy#action}.

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules.property.destination"></a>

```java
public ServiceMeshAccessPolicyRulesDestination getDestination();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination">ServiceMeshAccessPolicyRulesDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#destination ServiceMeshAccessPolicy#destination}

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules.property.source"></a>

```java
public ServiceMeshAccessPolicyRulesSource getSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource">ServiceMeshAccessPolicyRulesSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#source ServiceMeshAccessPolicy#source}

---

### ServiceMeshAccessPolicyRulesDestination <a name="ServiceMeshAccessPolicyRulesDestination" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_access_policy.ServiceMeshAccessPolicyRulesDestination;

ServiceMeshAccessPolicyRulesDestination.builder()
    .type(java.lang.String)
//  .hostnames(java.util.List<java.lang.String>)
//  .ingressGatewayId(java.lang.String)
//  .ipAddresses(java.util.List<java.lang.String>)
//  .ports(java.util.List<java.lang.Number>)
//  .protocol(java.lang.String)
//  .virtualServiceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#type ServiceMeshAccessPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#hostnames ServiceMeshAccessPolicy#hostnames}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.ingressGatewayId">ingressGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ingress_gateway_id ServiceMeshAccessPolicy#ingress_gateway_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ip_addresses ServiceMeshAccessPolicy#ip_addresses}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ports ServiceMeshAccessPolicy#ports}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#protocol ServiceMeshAccessPolicy#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.virtualServiceId">virtualServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#virtual_service_id ServiceMeshAccessPolicy#virtual_service_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#type ServiceMeshAccessPolicy#type}.

---

##### `hostnames`<sup>Optional</sup> <a name="hostnames" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#hostnames ServiceMeshAccessPolicy#hostnames}.

---

##### `ingressGatewayId`<sup>Optional</sup> <a name="ingressGatewayId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.ingressGatewayId"></a>

```java
public java.lang.String getIngressGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ingress_gateway_id ServiceMeshAccessPolicy#ingress_gateway_id}.

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ip_addresses ServiceMeshAccessPolicy#ip_addresses}.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ports ServiceMeshAccessPolicy#ports}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#protocol ServiceMeshAccessPolicy#protocol}.

---

##### `virtualServiceId`<sup>Optional</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.virtualServiceId"></a>

```java
public java.lang.String getVirtualServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#virtual_service_id ServiceMeshAccessPolicy#virtual_service_id}.

---

### ServiceMeshAccessPolicyRulesSource <a name="ServiceMeshAccessPolicyRulesSource" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_access_policy.ServiceMeshAccessPolicyRulesSource;

ServiceMeshAccessPolicyRulesSource.builder()
    .type(java.lang.String)
//  .hostnames(java.util.List<java.lang.String>)
//  .ingressGatewayId(java.lang.String)
//  .ipAddresses(java.util.List<java.lang.String>)
//  .ports(java.util.List<java.lang.Number>)
//  .protocol(java.lang.String)
//  .virtualServiceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#type ServiceMeshAccessPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#hostnames ServiceMeshAccessPolicy#hostnames}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.ingressGatewayId">ingressGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ingress_gateway_id ServiceMeshAccessPolicy#ingress_gateway_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ip_addresses ServiceMeshAccessPolicy#ip_addresses}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ports ServiceMeshAccessPolicy#ports}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#protocol ServiceMeshAccessPolicy#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.virtualServiceId">virtualServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#virtual_service_id ServiceMeshAccessPolicy#virtual_service_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#type ServiceMeshAccessPolicy#type}.

---

##### `hostnames`<sup>Optional</sup> <a name="hostnames" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#hostnames ServiceMeshAccessPolicy#hostnames}.

---

##### `ingressGatewayId`<sup>Optional</sup> <a name="ingressGatewayId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.ingressGatewayId"></a>

```java
public java.lang.String getIngressGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ingress_gateway_id ServiceMeshAccessPolicy#ingress_gateway_id}.

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ip_addresses ServiceMeshAccessPolicy#ip_addresses}.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ports ServiceMeshAccessPolicy#ports}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#protocol ServiceMeshAccessPolicy#protocol}.

---

##### `virtualServiceId`<sup>Optional</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.virtualServiceId"></a>

```java
public java.lang.String getVirtualServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#virtual_service_id ServiceMeshAccessPolicy#virtual_service_id}.

---

### ServiceMeshAccessPolicyTimeouts <a name="ServiceMeshAccessPolicyTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_access_policy.ServiceMeshAccessPolicyTimeouts;

ServiceMeshAccessPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#create ServiceMeshAccessPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#delete ServiceMeshAccessPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#update ServiceMeshAccessPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#create ServiceMeshAccessPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#delete ServiceMeshAccessPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#update ServiceMeshAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceMeshAccessPolicyRulesDestinationOutputReference <a name="ServiceMeshAccessPolicyRulesDestinationOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_access_policy.ServiceMeshAccessPolicyRulesDestinationOutputReference;

new ServiceMeshAccessPolicyRulesDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetHostnames">resetHostnames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetIngressGatewayId">resetIngressGatewayId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetIpAddresses">resetIpAddresses</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetVirtualServiceId">resetVirtualServiceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostnames` <a name="resetHostnames" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetHostnames"></a>

```java
public void resetHostnames()
```

##### `resetIngressGatewayId` <a name="resetIngressGatewayId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetIngressGatewayId"></a>

```java
public void resetIngressGatewayId()
```

##### `resetIpAddresses` <a name="resetIpAddresses" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetIpAddresses"></a>

```java
public void resetIpAddresses()
```

##### `resetPorts` <a name="resetPorts" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetPorts"></a>

```java
public void resetPorts()
```

##### `resetProtocol` <a name="resetProtocol" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetVirtualServiceId` <a name="resetVirtualServiceId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetVirtualServiceId"></a>

```java
public void resetVirtualServiceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.hostnamesInput">hostnamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.ingressGatewayIdInput">ingressGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.ipAddressesInput">ipAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.virtualServiceIdInput">virtualServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.ingressGatewayId">ingressGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.virtualServiceId">virtualServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination">ServiceMeshAccessPolicyRulesDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnamesInput`<sup>Optional</sup> <a name="hostnamesInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.hostnamesInput"></a>

```java
public java.util.List<java.lang.String> getHostnamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ingressGatewayIdInput`<sup>Optional</sup> <a name="ingressGatewayIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.ingressGatewayIdInput"></a>

```java
public java.lang.String getIngressGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="ipAddressesInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.ipAddressesInput"></a>

```java
public java.util.List<java.lang.String> getIpAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.portsInput"></a>

```java
public java.util.List<java.lang.Number> getPortsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `virtualServiceIdInput`<sup>Optional</sup> <a name="virtualServiceIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.virtualServiceIdInput"></a>

```java
public java.lang.String getVirtualServiceIdInput();
```

- *Type:* java.lang.String

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ingressGatewayId`<sup>Required</sup> <a name="ingressGatewayId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.ingressGatewayId"></a>

```java
public java.lang.String getIngressGatewayId();
```

- *Type:* java.lang.String

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ports`<sup>Required</sup> <a name="ports" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `virtualServiceId`<sup>Required</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.virtualServiceId"></a>

```java
public java.lang.String getVirtualServiceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.internalValue"></a>

```java
public ServiceMeshAccessPolicyRulesDestination getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination">ServiceMeshAccessPolicyRulesDestination</a>

---


### ServiceMeshAccessPolicyRulesList <a name="ServiceMeshAccessPolicyRulesList" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_access_policy.ServiceMeshAccessPolicyRulesList;

new ServiceMeshAccessPolicyRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.get"></a>

```java
public ServiceMeshAccessPolicyRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules">ServiceMeshAccessPolicyRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules">ServiceMeshAccessPolicyRules</a>>

---


### ServiceMeshAccessPolicyRulesOutputReference <a name="ServiceMeshAccessPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_access_policy.ServiceMeshAccessPolicyRulesOutputReference;

new ServiceMeshAccessPolicyRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putSource">putSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putDestination"></a>

```java
public void putDestination(ServiceMeshAccessPolicyRulesDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination">ServiceMeshAccessPolicyRulesDestination</a>

---

##### `putSource` <a name="putSource" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putSource"></a>

```java
public void putSource(ServiceMeshAccessPolicyRulesSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource">ServiceMeshAccessPolicyRulesSource</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.destination">destination</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference">ServiceMeshAccessPolicyRulesDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference">ServiceMeshAccessPolicyRulesSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.destinationInput">destinationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination">ServiceMeshAccessPolicyRulesDestination</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.sourceInput">sourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource">ServiceMeshAccessPolicyRulesSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules">ServiceMeshAccessPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.destination"></a>

```java
public ServiceMeshAccessPolicyRulesDestinationOutputReference getDestination();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference">ServiceMeshAccessPolicyRulesDestinationOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.source"></a>

```java
public ServiceMeshAccessPolicyRulesSourceOutputReference getSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference">ServiceMeshAccessPolicyRulesSourceOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.destinationInput"></a>

```java
public ServiceMeshAccessPolicyRulesDestination getDestinationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination">ServiceMeshAccessPolicyRulesDestination</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.sourceInput"></a>

```java
public ServiceMeshAccessPolicyRulesSource getSourceInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource">ServiceMeshAccessPolicyRulesSource</a>

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules">ServiceMeshAccessPolicyRules</a>

---


### ServiceMeshAccessPolicyRulesSourceOutputReference <a name="ServiceMeshAccessPolicyRulesSourceOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_access_policy.ServiceMeshAccessPolicyRulesSourceOutputReference;

new ServiceMeshAccessPolicyRulesSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetHostnames">resetHostnames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetIngressGatewayId">resetIngressGatewayId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetIpAddresses">resetIpAddresses</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetVirtualServiceId">resetVirtualServiceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostnames` <a name="resetHostnames" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetHostnames"></a>

```java
public void resetHostnames()
```

##### `resetIngressGatewayId` <a name="resetIngressGatewayId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetIngressGatewayId"></a>

```java
public void resetIngressGatewayId()
```

##### `resetIpAddresses` <a name="resetIpAddresses" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetIpAddresses"></a>

```java
public void resetIpAddresses()
```

##### `resetPorts` <a name="resetPorts" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetPorts"></a>

```java
public void resetPorts()
```

##### `resetProtocol` <a name="resetProtocol" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetVirtualServiceId` <a name="resetVirtualServiceId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetVirtualServiceId"></a>

```java
public void resetVirtualServiceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.hostnamesInput">hostnamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.ingressGatewayIdInput">ingressGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.ipAddressesInput">ipAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.virtualServiceIdInput">virtualServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.ingressGatewayId">ingressGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.virtualServiceId">virtualServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource">ServiceMeshAccessPolicyRulesSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnamesInput`<sup>Optional</sup> <a name="hostnamesInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.hostnamesInput"></a>

```java
public java.util.List<java.lang.String> getHostnamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ingressGatewayIdInput`<sup>Optional</sup> <a name="ingressGatewayIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.ingressGatewayIdInput"></a>

```java
public java.lang.String getIngressGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="ipAddressesInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.ipAddressesInput"></a>

```java
public java.util.List<java.lang.String> getIpAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.portsInput"></a>

```java
public java.util.List<java.lang.Number> getPortsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `virtualServiceIdInput`<sup>Optional</sup> <a name="virtualServiceIdInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.virtualServiceIdInput"></a>

```java
public java.lang.String getVirtualServiceIdInput();
```

- *Type:* java.lang.String

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ingressGatewayId`<sup>Required</sup> <a name="ingressGatewayId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.ingressGatewayId"></a>

```java
public java.lang.String getIngressGatewayId();
```

- *Type:* java.lang.String

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ports`<sup>Required</sup> <a name="ports" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `virtualServiceId`<sup>Required</sup> <a name="virtualServiceId" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.virtualServiceId"></a>

```java
public java.lang.String getVirtualServiceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.internalValue"></a>

```java
public ServiceMeshAccessPolicyRulesSource getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource">ServiceMeshAccessPolicyRulesSource</a>

---


### ServiceMeshAccessPolicyTimeoutsOutputReference <a name="ServiceMeshAccessPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.service_mesh_access_policy.ServiceMeshAccessPolicyTimeoutsOutputReference;

new ServiceMeshAccessPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts">ServiceMeshAccessPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts">ServiceMeshAccessPolicyTimeouts</a>

---



