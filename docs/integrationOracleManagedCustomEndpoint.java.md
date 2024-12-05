# `integrationOracleManagedCustomEndpoint` Submodule <a name="`integrationOracleManagedCustomEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationOracleManagedCustomEndpoint <a name="IntegrationOracleManagedCustomEndpoint" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint oci_integration_oracle_managed_custom_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_oracle_managed_custom_endpoint.IntegrationOracleManagedCustomEndpoint;

IntegrationOracleManagedCustomEndpoint.Builder.create(Construct scope, java.lang.String id)
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
    .hostname(java.lang.String)
    .integrationInstanceId(java.lang.String)
//  .dnsType(java.lang.String)
//  .dnsZoneName(java.lang.String)
//  .id(java.lang.String)
//  .managedType(java.lang.String)
//  .state(java.lang.String)
//  .timeouts(IntegrationOracleManagedCustomEndpointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#hostname IntegrationOracleManagedCustomEndpoint#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.integrationInstanceId">integrationInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#integration_instance_id IntegrationOracleManagedCustomEndpoint#integration_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.dnsType">dnsType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_type IntegrationOracleManagedCustomEndpoint#dns_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.dnsZoneName">dnsZoneName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_zone_name IntegrationOracleManagedCustomEndpoint#dns_zone_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#id IntegrationOracleManagedCustomEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.managedType">managedType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#managed_type IntegrationOracleManagedCustomEndpoint#managed_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#state IntegrationOracleManagedCustomEndpoint#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#hostname IntegrationOracleManagedCustomEndpoint#hostname}.

---

##### `integrationInstanceId`<sup>Required</sup> <a name="integrationInstanceId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.integrationInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#integration_instance_id IntegrationOracleManagedCustomEndpoint#integration_instance_id}.

---

##### `dnsType`<sup>Optional</sup> <a name="dnsType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.dnsType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_type IntegrationOracleManagedCustomEndpoint#dns_type}.

---

##### `dnsZoneName`<sup>Optional</sup> <a name="dnsZoneName" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.dnsZoneName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_zone_name IntegrationOracleManagedCustomEndpoint#dns_zone_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#id IntegrationOracleManagedCustomEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedType`<sup>Optional</sup> <a name="managedType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.managedType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#managed_type IntegrationOracleManagedCustomEndpoint#managed_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#state IntegrationOracleManagedCustomEndpoint#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#timeouts IntegrationOracleManagedCustomEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetDnsType">resetDnsType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetDnsZoneName">resetDnsZoneName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetManagedType">resetManagedType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.putTimeouts"></a>

```java
public void putTimeouts(IntegrationOracleManagedCustomEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a>

---

##### `resetDnsType` <a name="resetDnsType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetDnsType"></a>

```java
public void resetDnsType()
```

##### `resetDnsZoneName` <a name="resetDnsZoneName" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetDnsZoneName"></a>

```java
public void resetDnsZoneName()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetManagedType` <a name="resetManagedType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetManagedType"></a>

```java
public void resetManagedType()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetState"></a>

```java
public void resetState()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationOracleManagedCustomEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_oracle_managed_custom_endpoint.IntegrationOracleManagedCustomEndpoint;

IntegrationOracleManagedCustomEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_oracle_managed_custom_endpoint.IntegrationOracleManagedCustomEndpoint;

IntegrationOracleManagedCustomEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_oracle_managed_custom_endpoint.IntegrationOracleManagedCustomEndpoint;

IntegrationOracleManagedCustomEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_oracle_managed_custom_endpoint.IntegrationOracleManagedCustomEndpoint;

IntegrationOracleManagedCustomEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationOracleManagedCustomEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationOracleManagedCustomEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationOracleManagedCustomEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationOracleManagedCustomEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationOracleManagedCustomEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference">IntegrationOracleManagedCustomEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsTypeInput">dnsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsZoneNameInput">dnsZoneNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.integrationInstanceIdInput">integrationInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.managedTypeInput">managedTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsType">dnsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsZoneName">dnsZoneName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.integrationInstanceId">integrationInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.managedType">managedType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.timeouts"></a>

```java
public IntegrationOracleManagedCustomEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference">IntegrationOracleManagedCustomEndpointTimeoutsOutputReference</a>

---

##### `dnsTypeInput`<sup>Optional</sup> <a name="dnsTypeInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsTypeInput"></a>

```java
public java.lang.String getDnsTypeInput();
```

- *Type:* java.lang.String

---

##### `dnsZoneNameInput`<sup>Optional</sup> <a name="dnsZoneNameInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsZoneNameInput"></a>

```java
public java.lang.String getDnsZoneNameInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `integrationInstanceIdInput`<sup>Optional</sup> <a name="integrationInstanceIdInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.integrationInstanceIdInput"></a>

```java
public java.lang.String getIntegrationInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `managedTypeInput`<sup>Optional</sup> <a name="managedTypeInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.managedTypeInput"></a>

```java
public java.lang.String getManagedTypeInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a>

---

##### `dnsType`<sup>Required</sup> <a name="dnsType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsType"></a>

```java
public java.lang.String getDnsType();
```

- *Type:* java.lang.String

---

##### `dnsZoneName`<sup>Required</sup> <a name="dnsZoneName" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsZoneName"></a>

```java
public java.lang.String getDnsZoneName();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integrationInstanceId`<sup>Required</sup> <a name="integrationInstanceId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.integrationInstanceId"></a>

```java
public java.lang.String getIntegrationInstanceId();
```

- *Type:* java.lang.String

---

##### `managedType`<sup>Required</sup> <a name="managedType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.managedType"></a>

```java
public java.lang.String getManagedType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationOracleManagedCustomEndpointConfig <a name="IntegrationOracleManagedCustomEndpointConfig" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_oracle_managed_custom_endpoint.IntegrationOracleManagedCustomEndpointConfig;

IntegrationOracleManagedCustomEndpointConfig.builder()
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
    .hostname(java.lang.String)
    .integrationInstanceId(java.lang.String)
//  .dnsType(java.lang.String)
//  .dnsZoneName(java.lang.String)
//  .id(java.lang.String)
//  .managedType(java.lang.String)
//  .state(java.lang.String)
//  .timeouts(IntegrationOracleManagedCustomEndpointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#hostname IntegrationOracleManagedCustomEndpoint#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.integrationInstanceId">integrationInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#integration_instance_id IntegrationOracleManagedCustomEndpoint#integration_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dnsType">dnsType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_type IntegrationOracleManagedCustomEndpoint#dns_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dnsZoneName">dnsZoneName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_zone_name IntegrationOracleManagedCustomEndpoint#dns_zone_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#id IntegrationOracleManagedCustomEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.managedType">managedType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#managed_type IntegrationOracleManagedCustomEndpoint#managed_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#state IntegrationOracleManagedCustomEndpoint#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#hostname IntegrationOracleManagedCustomEndpoint#hostname}.

---

##### `integrationInstanceId`<sup>Required</sup> <a name="integrationInstanceId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.integrationInstanceId"></a>

```java
public java.lang.String getIntegrationInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#integration_instance_id IntegrationOracleManagedCustomEndpoint#integration_instance_id}.

---

##### `dnsType`<sup>Optional</sup> <a name="dnsType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dnsType"></a>

```java
public java.lang.String getDnsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_type IntegrationOracleManagedCustomEndpoint#dns_type}.

---

##### `dnsZoneName`<sup>Optional</sup> <a name="dnsZoneName" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dnsZoneName"></a>

```java
public java.lang.String getDnsZoneName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_zone_name IntegrationOracleManagedCustomEndpoint#dns_zone_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#id IntegrationOracleManagedCustomEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedType`<sup>Optional</sup> <a name="managedType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.managedType"></a>

```java
public java.lang.String getManagedType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#managed_type IntegrationOracleManagedCustomEndpoint#managed_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#state IntegrationOracleManagedCustomEndpoint#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.timeouts"></a>

```java
public IntegrationOracleManagedCustomEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#timeouts IntegrationOracleManagedCustomEndpoint#timeouts}

---

### IntegrationOracleManagedCustomEndpointTimeouts <a name="IntegrationOracleManagedCustomEndpointTimeouts" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_oracle_managed_custom_endpoint.IntegrationOracleManagedCustomEndpointTimeouts;

IntegrationOracleManagedCustomEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#create IntegrationOracleManagedCustomEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#delete IntegrationOracleManagedCustomEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#update IntegrationOracleManagedCustomEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#create IntegrationOracleManagedCustomEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#delete IntegrationOracleManagedCustomEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#update IntegrationOracleManagedCustomEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationOracleManagedCustomEndpointTimeoutsOutputReference <a name="IntegrationOracleManagedCustomEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_oracle_managed_custom_endpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference;

new IntegrationOracleManagedCustomEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a>

---



