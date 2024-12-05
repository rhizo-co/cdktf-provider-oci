# `dataOciGoldenGateConnections` Submodule <a name="`dataOciGoldenGateConnections` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGoldenGateConnections <a name="DataOciGoldenGateConnections" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections oci_golden_gate_connections}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnections;

DataOciGoldenGateConnections.Builder.create(Construct scope, java.lang.String id)
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
//  .assignableDeploymentId(java.lang.String)
//  .assignableDeploymentType(java.lang.String)
//  .assignedDeploymentId(java.lang.String)
//  .connectionType(java.util.List<java.lang.String>)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciGoldenGateConnectionsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .technologyType(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#compartment_id DataOciGoldenGateConnections#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.assignableDeploymentId">assignableDeploymentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#assignable_deployment_id DataOciGoldenGateConnections#assignable_deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.assignableDeploymentType">assignableDeploymentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#assignable_deployment_type DataOciGoldenGateConnections#assignable_deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.assignedDeploymentId">assignedDeploymentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#assigned_deployment_id DataOciGoldenGateConnections#assigned_deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.connectionType">connectionType</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#connection_type DataOciGoldenGateConnections#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#display_name DataOciGoldenGateConnections#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter">DataOciGoldenGateConnectionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#id DataOciGoldenGateConnections#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#state DataOciGoldenGateConnections#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.technologyType">technologyType</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#technology_type DataOciGoldenGateConnections#technology_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#compartment_id DataOciGoldenGateConnections#compartment_id}.

---

##### `assignableDeploymentId`<sup>Optional</sup> <a name="assignableDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.assignableDeploymentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#assignable_deployment_id DataOciGoldenGateConnections#assignable_deployment_id}.

---

##### `assignableDeploymentType`<sup>Optional</sup> <a name="assignableDeploymentType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.assignableDeploymentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#assignable_deployment_type DataOciGoldenGateConnections#assignable_deployment_type}.

---

##### `assignedDeploymentId`<sup>Optional</sup> <a name="assignedDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.assignedDeploymentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#assigned_deployment_id DataOciGoldenGateConnections#assigned_deployment_id}.

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.connectionType"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#connection_type DataOciGoldenGateConnections#connection_type}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#display_name DataOciGoldenGateConnections#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter">DataOciGoldenGateConnectionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#filter DataOciGoldenGateConnections#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#id DataOciGoldenGateConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#state DataOciGoldenGateConnections#state}.

---

##### `technologyType`<sup>Optional</sup> <a name="technologyType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.Initializer.parameter.technologyType"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#technology_type DataOciGoldenGateConnections#technology_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetAssignableDeploymentId">resetAssignableDeploymentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetAssignableDeploymentType">resetAssignableDeploymentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetAssignedDeploymentId">resetAssignedDeploymentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetTechnologyType">resetTechnologyType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciGoldenGateConnectionsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter">DataOciGoldenGateConnectionsFilter</a>>

---

##### `resetAssignableDeploymentId` <a name="resetAssignableDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetAssignableDeploymentId"></a>

```java
public void resetAssignableDeploymentId()
```

##### `resetAssignableDeploymentType` <a name="resetAssignableDeploymentType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetAssignableDeploymentType"></a>

```java
public void resetAssignableDeploymentType()
```

##### `resetAssignedDeploymentId` <a name="resetAssignedDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetAssignedDeploymentId"></a>

```java
public void resetAssignedDeploymentId()
```

##### `resetConnectionType` <a name="resetConnectionType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetConnectionType"></a>

```java
public void resetConnectionType()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetState"></a>

```java
public void resetState()
```

##### `resetTechnologyType` <a name="resetTechnologyType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.resetTechnologyType"></a>

```java
public void resetTechnologyType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGoldenGateConnections resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnections;

DataOciGoldenGateConnections.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnections;

DataOciGoldenGateConnections.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnections;

DataOciGoldenGateConnections.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnections;

DataOciGoldenGateConnections.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciGoldenGateConnections.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciGoldenGateConnections resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciGoldenGateConnections to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciGoldenGateConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGoldenGateConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.connectionCollection">connectionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList">DataOciGoldenGateConnectionsConnectionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList">DataOciGoldenGateConnectionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignableDeploymentIdInput">assignableDeploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignableDeploymentTypeInput">assignableDeploymentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignedDeploymentIdInput">assignedDeploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.connectionTypeInput">connectionTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter">DataOciGoldenGateConnectionsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.technologyTypeInput">technologyTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignableDeploymentId">assignableDeploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignableDeploymentType">assignableDeploymentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignedDeploymentId">assignedDeploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.connectionType">connectionType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.technologyType">technologyType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `connectionCollection`<sup>Required</sup> <a name="connectionCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.connectionCollection"></a>

```java
public DataOciGoldenGateConnectionsConnectionCollectionList getConnectionCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList">DataOciGoldenGateConnectionsConnectionCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.filter"></a>

```java
public DataOciGoldenGateConnectionsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList">DataOciGoldenGateConnectionsFilterList</a>

---

##### `assignableDeploymentIdInput`<sup>Optional</sup> <a name="assignableDeploymentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignableDeploymentIdInput"></a>

```java
public java.lang.String getAssignableDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `assignableDeploymentTypeInput`<sup>Optional</sup> <a name="assignableDeploymentTypeInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignableDeploymentTypeInput"></a>

```java
public java.lang.String getAssignableDeploymentTypeInput();
```

- *Type:* java.lang.String

---

##### `assignedDeploymentIdInput`<sup>Optional</sup> <a name="assignedDeploymentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignedDeploymentIdInput"></a>

```java
public java.lang.String getAssignedDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.connectionTypeInput"></a>

```java
public java.util.List<java.lang.String> getConnectionTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter">DataOciGoldenGateConnectionsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `technologyTypeInput`<sup>Optional</sup> <a name="technologyTypeInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.technologyTypeInput"></a>

```java
public java.util.List<java.lang.String> getTechnologyTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assignableDeploymentId`<sup>Required</sup> <a name="assignableDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignableDeploymentId"></a>

```java
public java.lang.String getAssignableDeploymentId();
```

- *Type:* java.lang.String

---

##### `assignableDeploymentType`<sup>Required</sup> <a name="assignableDeploymentType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignableDeploymentType"></a>

```java
public java.lang.String getAssignableDeploymentType();
```

- *Type:* java.lang.String

---

##### `assignedDeploymentId`<sup>Required</sup> <a name="assignedDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.assignedDeploymentId"></a>

```java
public java.lang.String getAssignedDeploymentId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.connectionType"></a>

```java
public java.util.List<java.lang.String> getConnectionType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `technologyType`<sup>Required</sup> <a name="technologyType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.technologyType"></a>

```java
public java.util.List<java.lang.String> getTechnologyType();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnections.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGoldenGateConnectionsConfig <a name="DataOciGoldenGateConnectionsConfig" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnectionsConfig;

DataOciGoldenGateConnectionsConfig.builder()
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
//  .assignableDeploymentId(java.lang.String)
//  .assignableDeploymentType(java.lang.String)
//  .assignedDeploymentId(java.lang.String)
//  .connectionType(java.util.List<java.lang.String>)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciGoldenGateConnectionsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .technologyType(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#compartment_id DataOciGoldenGateConnections#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.assignableDeploymentId">assignableDeploymentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#assignable_deployment_id DataOciGoldenGateConnections#assignable_deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.assignableDeploymentType">assignableDeploymentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#assignable_deployment_type DataOciGoldenGateConnections#assignable_deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.assignedDeploymentId">assignedDeploymentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#assigned_deployment_id DataOciGoldenGateConnections#assigned_deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.connectionType">connectionType</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#connection_type DataOciGoldenGateConnections#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#display_name DataOciGoldenGateConnections#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter">DataOciGoldenGateConnectionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#id DataOciGoldenGateConnections#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#state DataOciGoldenGateConnections#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.technologyType">technologyType</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#technology_type DataOciGoldenGateConnections#technology_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#compartment_id DataOciGoldenGateConnections#compartment_id}.

---

##### `assignableDeploymentId`<sup>Optional</sup> <a name="assignableDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.assignableDeploymentId"></a>

```java
public java.lang.String getAssignableDeploymentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#assignable_deployment_id DataOciGoldenGateConnections#assignable_deployment_id}.

---

##### `assignableDeploymentType`<sup>Optional</sup> <a name="assignableDeploymentType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.assignableDeploymentType"></a>

```java
public java.lang.String getAssignableDeploymentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#assignable_deployment_type DataOciGoldenGateConnections#assignable_deployment_type}.

---

##### `assignedDeploymentId`<sup>Optional</sup> <a name="assignedDeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.assignedDeploymentId"></a>

```java
public java.lang.String getAssignedDeploymentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#assigned_deployment_id DataOciGoldenGateConnections#assigned_deployment_id}.

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.connectionType"></a>

```java
public java.util.List<java.lang.String> getConnectionType();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#connection_type DataOciGoldenGateConnections#connection_type}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#display_name DataOciGoldenGateConnections#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter">DataOciGoldenGateConnectionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#filter DataOciGoldenGateConnections#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#id DataOciGoldenGateConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#state DataOciGoldenGateConnections#state}.

---

##### `technologyType`<sup>Optional</sup> <a name="technologyType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConfig.property.technologyType"></a>

```java
public java.util.List<java.lang.String> getTechnologyType();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#technology_type DataOciGoldenGateConnections#technology_type}.

---

### DataOciGoldenGateConnectionsConnectionCollection <a name="DataOciGoldenGateConnectionsConnectionCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnectionsConnectionCollection;

DataOciGoldenGateConnectionsConnectionCollection.builder()
    .build();
```


### DataOciGoldenGateConnectionsConnectionCollectionItems <a name="DataOciGoldenGateConnectionsConnectionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnectionsConnectionCollectionItems;

DataOciGoldenGateConnectionsConnectionCollectionItems.builder()
    .build();
```


### DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes;

DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes.builder()
    .build();
```


### DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers;

DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers.builder()
    .build();
```


### DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps;

DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps.builder()
    .build();
```


### DataOciGoldenGateConnectionsConnectionCollectionItemsLocks <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocks;

DataOciGoldenGateConnectionsConnectionCollectionItemsLocks.builder()
    .build();
```


### DataOciGoldenGateConnectionsFilter <a name="DataOciGoldenGateConnectionsFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnectionsFilter;

DataOciGoldenGateConnectionsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#name DataOciGoldenGateConnections#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#values DataOciGoldenGateConnections#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#regex DataOciGoldenGateConnections#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#name DataOciGoldenGateConnections#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#values DataOciGoldenGateConnections#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_connections#regex DataOciGoldenGateConnections#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList;

new DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.get"></a>

```java
public DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference;

new DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes">DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesOutputReference.property.internalValue"></a>

```java
public DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes">DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributes</a>

---


### DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList;

new DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.get"></a>

```java
public DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference;

new DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers">DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersOutputReference.property.internalValue"></a>

```java
public DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers">DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServers</a>

---


### DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList;

new DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.get"></a>

```java
public DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference;

new DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.property.ingressIp">ingressIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps">DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingressIp`<sup>Required</sup> <a name="ingressIp" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.property.ingressIp"></a>

```java
public java.lang.String getIngressIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsOutputReference.property.internalValue"></a>

```java
public DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps">DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIps</a>

---


### DataOciGoldenGateConnectionsConnectionCollectionItemsList <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnectionsConnectionCollectionItemsList;

new DataOciGoldenGateConnectionsConnectionCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.get"></a>

```java
public DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList;

new DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.get"></a>

```java
public DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference;

new DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocks">DataOciGoldenGateConnectionsConnectionCollectionItemsLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksOutputReference.property.internalValue"></a>

```java
public DataOciGoldenGateConnectionsConnectionCollectionItemsLocks getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocks">DataOciGoldenGateConnectionsConnectionCollectionItemsLocks</a>

---


### DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference <a name="DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference;

new DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.accountKey">accountKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.accountKeySecretId">accountKeySecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.additionalAttributes">additionalAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList">DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.authenticationMode">authenticationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.bootstrapServers">bootstrapServers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList">DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.clientSecretSecretId">clientSecretSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.connectionFactory">connectionFactory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.consumerProperties">consumerProperties</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.coreSiteXml">coreSiteXml</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.doesUseSecretIds">doesUseSecretIds</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.ingressIps">ingressIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList">DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.isLockOverride">isLockOverride</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiConnectionFactory">jndiConnectionFactory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiInitialContextFactory">jndiInitialContextFactory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiProviderUrl">jndiProviderUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiSecurityCredentials">jndiSecurityCredentials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiSecurityCredentialsSecretId">jndiSecurityCredentialsSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiSecurityPrincipal">jndiSecurityPrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.keyStore">keyStore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.keyStorePassword">keyStorePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.keyStorePasswordSecretId">keyStorePasswordSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.keyStoreSecretId">keyStoreSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList">DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.privateKeyFile">privateKeyFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.privateKeyFileSecretId">privateKeyFileSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.privateKeyPassphrase">privateKeyPassphrase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.privateKeyPassphraseSecretId">privateKeyPassphraseSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.producerProperties">producerProperties</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.publicKeyFingerprint">publicKeyFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.redisClusterId">redisClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.routingMethod">routingMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sasToken">sasToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sasTokenSecretId">sasTokenSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.secretAccessKey">secretAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.secretAccessKeySecretId">secretAccessKeySecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.securityProtocol">securityProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.servers">servers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.serviceAccountKeyFile">serviceAccountKeyFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.serviceAccountKeyFileSecretId">serviceAccountKeyFileSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sessionMode">sessionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.shouldUseJndi">shouldUseJndi</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.shouldValidateServerCertificate">shouldValidateServerCertificate</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslCa">sslCa</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslCert">sslCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslClientKeystash">sslClientKeystash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslClientKeystashSecretId">sslClientKeystashSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslClientKeystoredb">sslClientKeystoredb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslClientKeystoredbSecretId">sslClientKeystoredbSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslCrl">sslCrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslKey">sslKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslKeyPassword">sslKeyPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslKeyPasswordSecretId">sslKeyPasswordSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslKeySecretId">sslKeySecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslMode">sslMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslServerCertificate">sslServerCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.streamPoolId">streamPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.technologyType">technologyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.tenancyId">tenancyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.triggerRefresh">triggerRefresh</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.trustStore">trustStore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.trustStorePassword">trustStorePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.trustStorePasswordSecretId">trustStorePasswordSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.trustStoreSecretId">trustStoreSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.wallet">wallet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.walletSecretId">walletSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItems">DataOciGoldenGateConnectionsConnectionCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.accountKey"></a>

```java
public java.lang.String getAccountKey();
```

- *Type:* java.lang.String

---

##### `accountKeySecretId`<sup>Required</sup> <a name="accountKeySecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.accountKeySecretId"></a>

```java
public java.lang.String getAccountKeySecretId();
```

- *Type:* java.lang.String

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `additionalAttributes`<sup>Required</sup> <a name="additionalAttributes" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.additionalAttributes"></a>

```java
public DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList getAdditionalAttributes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList">DataOciGoldenGateConnectionsConnectionCollectionItemsAdditionalAttributesList</a>

---

##### `authenticationMode`<sup>Required</sup> <a name="authenticationMode" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.authenticationMode"></a>

```java
public java.lang.String getAuthenticationMode();
```

- *Type:* java.lang.String

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.azureTenantId"></a>

```java
public java.lang.String getAzureTenantId();
```

- *Type:* java.lang.String

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.bootstrapServers"></a>

```java
public DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList getBootstrapServers();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList">DataOciGoldenGateConnectionsConnectionCollectionItemsBootstrapServersList</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `clientSecretSecretId`<sup>Required</sup> <a name="clientSecretSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.clientSecretSecretId"></a>

```java
public java.lang.String getClientSecretSecretId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `connectionFactory`<sup>Required</sup> <a name="connectionFactory" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.connectionFactory"></a>

```java
public java.lang.String getConnectionFactory();
```

- *Type:* java.lang.String

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

---

##### `consumerProperties`<sup>Required</sup> <a name="consumerProperties" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.consumerProperties"></a>

```java
public java.lang.String getConsumerProperties();
```

- *Type:* java.lang.String

---

##### `coreSiteXml`<sup>Required</sup> <a name="coreSiteXml" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.coreSiteXml"></a>

```java
public java.lang.String getCoreSiteXml();
```

- *Type:* java.lang.String

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `doesUseSecretIds`<sup>Required</sup> <a name="doesUseSecretIds" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.doesUseSecretIds"></a>

```java
public IResolvable getDoesUseSecretIds();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ingressIps`<sup>Required</sup> <a name="ingressIps" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.ingressIps"></a>

```java
public DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList getIngressIps();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList">DataOciGoldenGateConnectionsConnectionCollectionItemsIngressIpsList</a>

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.isLockOverride"></a>

```java
public IResolvable getIsLockOverride();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `jndiConnectionFactory`<sup>Required</sup> <a name="jndiConnectionFactory" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiConnectionFactory"></a>

```java
public java.lang.String getJndiConnectionFactory();
```

- *Type:* java.lang.String

---

##### `jndiInitialContextFactory`<sup>Required</sup> <a name="jndiInitialContextFactory" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiInitialContextFactory"></a>

```java
public java.lang.String getJndiInitialContextFactory();
```

- *Type:* java.lang.String

---

##### `jndiProviderUrl`<sup>Required</sup> <a name="jndiProviderUrl" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiProviderUrl"></a>

```java
public java.lang.String getJndiProviderUrl();
```

- *Type:* java.lang.String

---

##### `jndiSecurityCredentials`<sup>Required</sup> <a name="jndiSecurityCredentials" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiSecurityCredentials"></a>

```java
public java.lang.String getJndiSecurityCredentials();
```

- *Type:* java.lang.String

---

##### `jndiSecurityCredentialsSecretId`<sup>Required</sup> <a name="jndiSecurityCredentialsSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiSecurityCredentialsSecretId"></a>

```java
public java.lang.String getJndiSecurityCredentialsSecretId();
```

- *Type:* java.lang.String

---

##### `jndiSecurityPrincipal`<sup>Required</sup> <a name="jndiSecurityPrincipal" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.jndiSecurityPrincipal"></a>

```java
public java.lang.String getJndiSecurityPrincipal();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `keyStore`<sup>Required</sup> <a name="keyStore" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.keyStore"></a>

```java
public java.lang.String getKeyStore();
```

- *Type:* java.lang.String

---

##### `keyStorePassword`<sup>Required</sup> <a name="keyStorePassword" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.keyStorePassword"></a>

```java
public java.lang.String getKeyStorePassword();
```

- *Type:* java.lang.String

---

##### `keyStorePasswordSecretId`<sup>Required</sup> <a name="keyStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.keyStorePasswordSecretId"></a>

```java
public java.lang.String getKeyStorePasswordSecretId();
```

- *Type:* java.lang.String

---

##### `keyStoreSecretId`<sup>Required</sup> <a name="keyStoreSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.keyStoreSecretId"></a>

```java
public java.lang.String getKeyStoreSecretId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.locks"></a>

```java
public DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList getLocks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList">DataOciGoldenGateConnectionsConnectionCollectionItemsLocksList</a>

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `privateKeyFile`<sup>Required</sup> <a name="privateKeyFile" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.privateKeyFile"></a>

```java
public java.lang.String getPrivateKeyFile();
```

- *Type:* java.lang.String

---

##### `privateKeyFileSecretId`<sup>Required</sup> <a name="privateKeyFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.privateKeyFileSecretId"></a>

```java
public java.lang.String getPrivateKeyFileSecretId();
```

- *Type:* java.lang.String

---

##### `privateKeyPassphrase`<sup>Required</sup> <a name="privateKeyPassphrase" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.privateKeyPassphrase"></a>

```java
public java.lang.String getPrivateKeyPassphrase();
```

- *Type:* java.lang.String

---

##### `privateKeyPassphraseSecretId`<sup>Required</sup> <a name="privateKeyPassphraseSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.privateKeyPassphraseSecretId"></a>

```java
public java.lang.String getPrivateKeyPassphraseSecretId();
```

- *Type:* java.lang.String

---

##### `producerProperties`<sup>Required</sup> <a name="producerProperties" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.producerProperties"></a>

```java
public java.lang.String getProducerProperties();
```

- *Type:* java.lang.String

---

##### `publicKeyFingerprint`<sup>Required</sup> <a name="publicKeyFingerprint" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.publicKeyFingerprint"></a>

```java
public java.lang.String getPublicKeyFingerprint();
```

- *Type:* java.lang.String

---

##### `redisClusterId`<sup>Required</sup> <a name="redisClusterId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.redisClusterId"></a>

```java
public java.lang.String getRedisClusterId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `routingMethod`<sup>Required</sup> <a name="routingMethod" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.routingMethod"></a>

```java
public java.lang.String getRoutingMethod();
```

- *Type:* java.lang.String

---

##### `sasToken`<sup>Required</sup> <a name="sasToken" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sasToken"></a>

```java
public java.lang.String getSasToken();
```

- *Type:* java.lang.String

---

##### `sasTokenSecretId`<sup>Required</sup> <a name="sasTokenSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sasTokenSecretId"></a>

```java
public java.lang.String getSasTokenSecretId();
```

- *Type:* java.lang.String

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.secretAccessKey"></a>

```java
public java.lang.String getSecretAccessKey();
```

- *Type:* java.lang.String

---

##### `secretAccessKeySecretId`<sup>Required</sup> <a name="secretAccessKeySecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.secretAccessKeySecretId"></a>

```java
public java.lang.String getSecretAccessKeySecretId();
```

- *Type:* java.lang.String

---

##### `securityProtocol`<sup>Required</sup> <a name="securityProtocol" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.securityProtocol"></a>

```java
public java.lang.String getSecurityProtocol();
```

- *Type:* java.lang.String

---

##### `servers`<sup>Required</sup> <a name="servers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.servers"></a>

```java
public java.lang.String getServers();
```

- *Type:* java.lang.String

---

##### `serviceAccountKeyFile`<sup>Required</sup> <a name="serviceAccountKeyFile" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.serviceAccountKeyFile"></a>

```java
public java.lang.String getServiceAccountKeyFile();
```

- *Type:* java.lang.String

---

##### `serviceAccountKeyFileSecretId`<sup>Required</sup> <a name="serviceAccountKeyFileSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.serviceAccountKeyFileSecretId"></a>

```java
public java.lang.String getServiceAccountKeyFileSecretId();
```

- *Type:* java.lang.String

---

##### `sessionMode`<sup>Required</sup> <a name="sessionMode" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sessionMode"></a>

```java
public java.lang.String getSessionMode();
```

- *Type:* java.lang.String

---

##### `shouldUseJndi`<sup>Required</sup> <a name="shouldUseJndi" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.shouldUseJndi"></a>

```java
public IResolvable getShouldUseJndi();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `shouldValidateServerCertificate`<sup>Required</sup> <a name="shouldValidateServerCertificate" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.shouldValidateServerCertificate"></a>

```java
public IResolvable getShouldValidateServerCertificate();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `sslCa`<sup>Required</sup> <a name="sslCa" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslCa"></a>

```java
public java.lang.String getSslCa();
```

- *Type:* java.lang.String

---

##### `sslCert`<sup>Required</sup> <a name="sslCert" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslCert"></a>

```java
public java.lang.String getSslCert();
```

- *Type:* java.lang.String

---

##### `sslClientKeystash`<sup>Required</sup> <a name="sslClientKeystash" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslClientKeystash"></a>

```java
public java.lang.String getSslClientKeystash();
```

- *Type:* java.lang.String

---

##### `sslClientKeystashSecretId`<sup>Required</sup> <a name="sslClientKeystashSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslClientKeystashSecretId"></a>

```java
public java.lang.String getSslClientKeystashSecretId();
```

- *Type:* java.lang.String

---

##### `sslClientKeystoredb`<sup>Required</sup> <a name="sslClientKeystoredb" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslClientKeystoredb"></a>

```java
public java.lang.String getSslClientKeystoredb();
```

- *Type:* java.lang.String

---

##### `sslClientKeystoredbSecretId`<sup>Required</sup> <a name="sslClientKeystoredbSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslClientKeystoredbSecretId"></a>

```java
public java.lang.String getSslClientKeystoredbSecretId();
```

- *Type:* java.lang.String

---

##### `sslCrl`<sup>Required</sup> <a name="sslCrl" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslCrl"></a>

```java
public java.lang.String getSslCrl();
```

- *Type:* java.lang.String

---

##### `sslKey`<sup>Required</sup> <a name="sslKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslKey"></a>

```java
public java.lang.String getSslKey();
```

- *Type:* java.lang.String

---

##### `sslKeyPassword`<sup>Required</sup> <a name="sslKeyPassword" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslKeyPassword"></a>

```java
public java.lang.String getSslKeyPassword();
```

- *Type:* java.lang.String

---

##### `sslKeyPasswordSecretId`<sup>Required</sup> <a name="sslKeyPasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslKeyPasswordSecretId"></a>

```java
public java.lang.String getSslKeyPasswordSecretId();
```

- *Type:* java.lang.String

---

##### `sslKeySecretId`<sup>Required</sup> <a name="sslKeySecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslKeySecretId"></a>

```java
public java.lang.String getSslKeySecretId();
```

- *Type:* java.lang.String

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslMode"></a>

```java
public java.lang.String getSslMode();
```

- *Type:* java.lang.String

---

##### `sslServerCertificate`<sup>Required</sup> <a name="sslServerCertificate" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.sslServerCertificate"></a>

```java
public java.lang.String getSslServerCertificate();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `streamPoolId`<sup>Required</sup> <a name="streamPoolId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.streamPoolId"></a>

```java
public java.lang.String getStreamPoolId();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `technologyType`<sup>Required</sup> <a name="technologyType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.technologyType"></a>

```java
public java.lang.String getTechnologyType();
```

- *Type:* java.lang.String

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.tenancyId"></a>

```java
public java.lang.String getTenancyId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `triggerRefresh`<sup>Required</sup> <a name="triggerRefresh" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.triggerRefresh"></a>

```java
public IResolvable getTriggerRefresh();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `trustStore`<sup>Required</sup> <a name="trustStore" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.trustStore"></a>

```java
public java.lang.String getTrustStore();
```

- *Type:* java.lang.String

---

##### `trustStorePassword`<sup>Required</sup> <a name="trustStorePassword" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.trustStorePassword"></a>

```java
public java.lang.String getTrustStorePassword();
```

- *Type:* java.lang.String

---

##### `trustStorePasswordSecretId`<sup>Required</sup> <a name="trustStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.trustStorePasswordSecretId"></a>

```java
public java.lang.String getTrustStorePasswordSecretId();
```

- *Type:* java.lang.String

---

##### `trustStoreSecretId`<sup>Required</sup> <a name="trustStoreSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.trustStoreSecretId"></a>

```java
public java.lang.String getTrustStoreSecretId();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

##### `wallet`<sup>Required</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.wallet"></a>

```java
public java.lang.String getWallet();
```

- *Type:* java.lang.String

---

##### `walletSecretId`<sup>Required</sup> <a name="walletSecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.walletSecretId"></a>

```java
public java.lang.String getWalletSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciGoldenGateConnectionsConnectionCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItems">DataOciGoldenGateConnectionsConnectionCollectionItems</a>

---


### DataOciGoldenGateConnectionsConnectionCollectionList <a name="DataOciGoldenGateConnectionsConnectionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnectionsConnectionCollectionList;

new DataOciGoldenGateConnectionsConnectionCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.get"></a>

```java
public DataOciGoldenGateConnectionsConnectionCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciGoldenGateConnectionsConnectionCollectionOutputReference <a name="DataOciGoldenGateConnectionsConnectionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference;

new DataOciGoldenGateConnectionsConnectionCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList">DataOciGoldenGateConnectionsConnectionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollection">DataOciGoldenGateConnectionsConnectionCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.property.items"></a>

```java
public DataOciGoldenGateConnectionsConnectionCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionItemsList">DataOciGoldenGateConnectionsConnectionCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollectionOutputReference.property.internalValue"></a>

```java
public DataOciGoldenGateConnectionsConnectionCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsConnectionCollection">DataOciGoldenGateConnectionsConnectionCollection</a>

---


### DataOciGoldenGateConnectionsFilterList <a name="DataOciGoldenGateConnectionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnectionsFilterList;

new DataOciGoldenGateConnectionsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.get"></a>

```java
public DataOciGoldenGateConnectionsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter">DataOciGoldenGateConnectionsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter">DataOciGoldenGateConnectionsFilter</a>>

---


### DataOciGoldenGateConnectionsFilterOutputReference <a name="DataOciGoldenGateConnectionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_golden_gate_connections.DataOciGoldenGateConnectionsFilterOutputReference;

new DataOciGoldenGateConnectionsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter">DataOciGoldenGateConnectionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateConnections.DataOciGoldenGateConnectionsFilter">DataOciGoldenGateConnectionsFilter</a>

---



