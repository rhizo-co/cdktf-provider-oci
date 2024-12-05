# `integrationPrivateEndpointOutboundConnection` Submodule <a name="`integrationPrivateEndpointOutboundConnection` Submodule" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationPrivateEndpointOutboundConnection <a name="IntegrationPrivateEndpointOutboundConnection" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection oci_integration_private_endpoint_outbound_connection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_private_endpoint_outbound_connection.IntegrationPrivateEndpointOutboundConnection;

IntegrationPrivateEndpointOutboundConnection.Builder.create(Construct scope, java.lang.String id)
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
    .integrationInstanceId(java.lang.String)
    .subnetId(java.lang.String)
//  .id(java.lang.String)
//  .nsgIds(java.util.List<java.lang.String>)
//  .state(java.lang.String)
//  .timeouts(IntegrationPrivateEndpointOutboundConnectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.integrationInstanceId">integrationInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#integration_instance_id IntegrationPrivateEndpointOutboundConnection#integration_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#subnet_id IntegrationPrivateEndpointOutboundConnection#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#id IntegrationPrivateEndpointOutboundConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#nsg_ids IntegrationPrivateEndpointOutboundConnection#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#state IntegrationPrivateEndpointOutboundConnection#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `integrationInstanceId`<sup>Required</sup> <a name="integrationInstanceId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.integrationInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#integration_instance_id IntegrationPrivateEndpointOutboundConnection#integration_instance_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#subnet_id IntegrationPrivateEndpointOutboundConnection#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#id IntegrationPrivateEndpointOutboundConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.nsgIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#nsg_ids IntegrationPrivateEndpointOutboundConnection#nsg_ids}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#state IntegrationPrivateEndpointOutboundConnection#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#timeouts IntegrationPrivateEndpointOutboundConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.putTimeouts"></a>

```java
public void putTimeouts(IntegrationPrivateEndpointOutboundConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetId"></a>

```java
public void resetId()
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetNsgIds"></a>

```java
public void resetNsgIds()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetState"></a>

```java
public void resetState()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationPrivateEndpointOutboundConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_private_endpoint_outbound_connection.IntegrationPrivateEndpointOutboundConnection;

IntegrationPrivateEndpointOutboundConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_private_endpoint_outbound_connection.IntegrationPrivateEndpointOutboundConnection;

IntegrationPrivateEndpointOutboundConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_private_endpoint_outbound_connection.IntegrationPrivateEndpointOutboundConnection;

IntegrationPrivateEndpointOutboundConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_private_endpoint_outbound_connection.IntegrationPrivateEndpointOutboundConnection;

IntegrationPrivateEndpointOutboundConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationPrivateEndpointOutboundConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationPrivateEndpointOutboundConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationPrivateEndpointOutboundConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationPrivateEndpointOutboundConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationPrivateEndpointOutboundConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference">IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.integrationInstanceIdInput">integrationInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.integrationInstanceId">integrationInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.timeouts"></a>

```java
public IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference">IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `integrationInstanceIdInput`<sup>Optional</sup> <a name="integrationInstanceIdInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.integrationInstanceIdInput"></a>

```java
public java.lang.String getIntegrationInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integrationInstanceId`<sup>Required</sup> <a name="integrationInstanceId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.integrationInstanceId"></a>

```java
public java.lang.String getIntegrationInstanceId();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationPrivateEndpointOutboundConnectionConfig <a name="IntegrationPrivateEndpointOutboundConnectionConfig" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_private_endpoint_outbound_connection.IntegrationPrivateEndpointOutboundConnectionConfig;

IntegrationPrivateEndpointOutboundConnectionConfig.builder()
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
    .integrationInstanceId(java.lang.String)
    .subnetId(java.lang.String)
//  .id(java.lang.String)
//  .nsgIds(java.util.List<java.lang.String>)
//  .state(java.lang.String)
//  .timeouts(IntegrationPrivateEndpointOutboundConnectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.integrationInstanceId">integrationInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#integration_instance_id IntegrationPrivateEndpointOutboundConnection#integration_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#subnet_id IntegrationPrivateEndpointOutboundConnection#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#id IntegrationPrivateEndpointOutboundConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#nsg_ids IntegrationPrivateEndpointOutboundConnection#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#state IntegrationPrivateEndpointOutboundConnection#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `integrationInstanceId`<sup>Required</sup> <a name="integrationInstanceId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.integrationInstanceId"></a>

```java
public java.lang.String getIntegrationInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#integration_instance_id IntegrationPrivateEndpointOutboundConnection#integration_instance_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#subnet_id IntegrationPrivateEndpointOutboundConnection#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#id IntegrationPrivateEndpointOutboundConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#nsg_ids IntegrationPrivateEndpointOutboundConnection#nsg_ids}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#state IntegrationPrivateEndpointOutboundConnection#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.timeouts"></a>

```java
public IntegrationPrivateEndpointOutboundConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#timeouts IntegrationPrivateEndpointOutboundConnection#timeouts}

---

### IntegrationPrivateEndpointOutboundConnectionTimeouts <a name="IntegrationPrivateEndpointOutboundConnectionTimeouts" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_private_endpoint_outbound_connection.IntegrationPrivateEndpointOutboundConnectionTimeouts;

IntegrationPrivateEndpointOutboundConnectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#create IntegrationPrivateEndpointOutboundConnection#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#delete IntegrationPrivateEndpointOutboundConnection#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#update IntegrationPrivateEndpointOutboundConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#create IntegrationPrivateEndpointOutboundConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#delete IntegrationPrivateEndpointOutboundConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#update IntegrationPrivateEndpointOutboundConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference <a name="IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_private_endpoint_outbound_connection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference;

new IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a>

---



