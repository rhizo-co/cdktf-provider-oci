# `globallyDistributedDatabasePrivateEndpoint` Submodule <a name="`globallyDistributedDatabasePrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GloballyDistributedDatabasePrivateEndpoint <a name="GloballyDistributedDatabasePrivateEndpoint" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint oci_globally_distributed_database_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_private_endpoint.GloballyDistributedDatabasePrivateEndpoint;

GloballyDistributedDatabasePrivateEndpoint.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .subnetId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .nsgIds(java.util.List<java.lang.String>)
//  .reinstateProxyInstanceTrigger(java.lang.Number)
//  .timeouts(GloballyDistributedDatabasePrivateEndpointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#compartment_id GloballyDistributedDatabasePrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#display_name GloballyDistributedDatabasePrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#subnet_id GloballyDistributedDatabasePrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#defined_tags GloballyDistributedDatabasePrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#description GloballyDistributedDatabasePrivateEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#freeform_tags GloballyDistributedDatabasePrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#id GloballyDistributedDatabasePrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#nsg_ids GloballyDistributedDatabasePrivateEndpoint#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.reinstateProxyInstanceTrigger">reinstateProxyInstanceTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#reinstate_proxy_instance_trigger GloballyDistributedDatabasePrivateEndpoint#reinstate_proxy_instance_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts">GloballyDistributedDatabasePrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#compartment_id GloballyDistributedDatabasePrivateEndpoint#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#display_name GloballyDistributedDatabasePrivateEndpoint#display_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#subnet_id GloballyDistributedDatabasePrivateEndpoint#subnet_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#defined_tags GloballyDistributedDatabasePrivateEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#description GloballyDistributedDatabasePrivateEndpoint#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#freeform_tags GloballyDistributedDatabasePrivateEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#id GloballyDistributedDatabasePrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.nsgIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#nsg_ids GloballyDistributedDatabasePrivateEndpoint#nsg_ids}.

---

##### `reinstateProxyInstanceTrigger`<sup>Optional</sup> <a name="reinstateProxyInstanceTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.reinstateProxyInstanceTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#reinstate_proxy_instance_trigger GloballyDistributedDatabasePrivateEndpoint#reinstate_proxy_instance_trigger}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts">GloballyDistributedDatabasePrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#timeouts GloballyDistributedDatabasePrivateEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetReinstateProxyInstanceTrigger">resetReinstateProxyInstanceTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.putTimeouts"></a>

```java
public void putTimeouts(GloballyDistributedDatabasePrivateEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts">GloballyDistributedDatabasePrivateEndpointTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetNsgIds"></a>

```java
public void resetNsgIds()
```

##### `resetReinstateProxyInstanceTrigger` <a name="resetReinstateProxyInstanceTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetReinstateProxyInstanceTrigger"></a>

```java
public void resetReinstateProxyInstanceTrigger()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GloballyDistributedDatabasePrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_private_endpoint.GloballyDistributedDatabasePrivateEndpoint;

GloballyDistributedDatabasePrivateEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_private_endpoint.GloballyDistributedDatabasePrivateEndpoint;

GloballyDistributedDatabasePrivateEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_private_endpoint.GloballyDistributedDatabasePrivateEndpoint;

GloballyDistributedDatabasePrivateEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_private_endpoint.GloballyDistributedDatabasePrivateEndpoint;

GloballyDistributedDatabasePrivateEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GloballyDistributedDatabasePrivateEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GloballyDistributedDatabasePrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GloballyDistributedDatabasePrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GloballyDistributedDatabasePrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GloballyDistributedDatabasePrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.lifecycleStateDetails">lifecycleStateDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.proxyComputeInstanceId">proxyComputeInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.shardedDatabases">shardedDatabases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference">GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.reinstateProxyInstanceTriggerInput">reinstateProxyInstanceTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts">GloballyDistributedDatabasePrivateEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.reinstateProxyInstanceTrigger">reinstateProxyInstanceTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `lifecycleStateDetails`<sup>Required</sup> <a name="lifecycleStateDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.lifecycleStateDetails"></a>

```java
public java.lang.String getLifecycleStateDetails();
```

- *Type:* java.lang.String

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `proxyComputeInstanceId`<sup>Required</sup> <a name="proxyComputeInstanceId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.proxyComputeInstanceId"></a>

```java
public java.lang.String getProxyComputeInstanceId();
```

- *Type:* java.lang.String

---

##### `shardedDatabases`<sup>Required</sup> <a name="shardedDatabases" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.shardedDatabases"></a>

```java
public java.util.List<java.lang.String> getShardedDatabases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeouts"></a>

```java
public GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference">GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `reinstateProxyInstanceTriggerInput`<sup>Optional</sup> <a name="reinstateProxyInstanceTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.reinstateProxyInstanceTriggerInput"></a>

```java
public java.lang.Number getReinstateProxyInstanceTriggerInput();
```

- *Type:* java.lang.Number

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts">GloballyDistributedDatabasePrivateEndpointTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `reinstateProxyInstanceTrigger`<sup>Required</sup> <a name="reinstateProxyInstanceTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.reinstateProxyInstanceTrigger"></a>

```java
public java.lang.Number getReinstateProxyInstanceTrigger();
```

- *Type:* java.lang.Number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GloballyDistributedDatabasePrivateEndpointConfig <a name="GloballyDistributedDatabasePrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_private_endpoint.GloballyDistributedDatabasePrivateEndpointConfig;

GloballyDistributedDatabasePrivateEndpointConfig.builder()
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
    .displayName(java.lang.String)
    .subnetId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .nsgIds(java.util.List<java.lang.String>)
//  .reinstateProxyInstanceTrigger(java.lang.Number)
//  .timeouts(GloballyDistributedDatabasePrivateEndpointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#compartment_id GloballyDistributedDatabasePrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#display_name GloballyDistributedDatabasePrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#subnet_id GloballyDistributedDatabasePrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#defined_tags GloballyDistributedDatabasePrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#description GloballyDistributedDatabasePrivateEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#freeform_tags GloballyDistributedDatabasePrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#id GloballyDistributedDatabasePrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#nsg_ids GloballyDistributedDatabasePrivateEndpoint#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.reinstateProxyInstanceTrigger">reinstateProxyInstanceTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#reinstate_proxy_instance_trigger GloballyDistributedDatabasePrivateEndpoint#reinstate_proxy_instance_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts">GloballyDistributedDatabasePrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#compartment_id GloballyDistributedDatabasePrivateEndpoint#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#display_name GloballyDistributedDatabasePrivateEndpoint#display_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#subnet_id GloballyDistributedDatabasePrivateEndpoint#subnet_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#defined_tags GloballyDistributedDatabasePrivateEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#description GloballyDistributedDatabasePrivateEndpoint#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#freeform_tags GloballyDistributedDatabasePrivateEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#id GloballyDistributedDatabasePrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#nsg_ids GloballyDistributedDatabasePrivateEndpoint#nsg_ids}.

---

##### `reinstateProxyInstanceTrigger`<sup>Optional</sup> <a name="reinstateProxyInstanceTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.reinstateProxyInstanceTrigger"></a>

```java
public java.lang.Number getReinstateProxyInstanceTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#reinstate_proxy_instance_trigger GloballyDistributedDatabasePrivateEndpoint#reinstate_proxy_instance_trigger}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.timeouts"></a>

```java
public GloballyDistributedDatabasePrivateEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts">GloballyDistributedDatabasePrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#timeouts GloballyDistributedDatabasePrivateEndpoint#timeouts}

---

### GloballyDistributedDatabasePrivateEndpointTimeouts <a name="GloballyDistributedDatabasePrivateEndpointTimeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_private_endpoint.GloballyDistributedDatabasePrivateEndpointTimeouts;

GloballyDistributedDatabasePrivateEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#create GloballyDistributedDatabasePrivateEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#delete GloballyDistributedDatabasePrivateEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#update GloballyDistributedDatabasePrivateEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#create GloballyDistributedDatabasePrivateEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#delete GloballyDistributedDatabasePrivateEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#update GloballyDistributedDatabasePrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference <a name="GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.globally_distributed_database_private_endpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference;

new GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts">GloballyDistributedDatabasePrivateEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts">GloballyDistributedDatabasePrivateEndpointTimeouts</a>

---



