# `meteringComputationUsageCarbonEmissionsQuery` Submodule <a name="`meteringComputationUsageCarbonEmissionsQuery` Submodule" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MeteringComputationUsageCarbonEmissionsQuery <a name="MeteringComputationUsageCarbonEmissionsQuery" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query oci_metering_computation_usage_carbon_emissions_query}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emissions_query.MeteringComputationUsageCarbonEmissionsQuery;

MeteringComputationUsageCarbonEmissionsQuery.Builder.create(Construct scope, java.lang.String id)
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
    .queryDefinition(MeteringComputationUsageCarbonEmissionsQueryQueryDefinition)
//  .id(java.lang.String)
//  .timeouts(MeteringComputationUsageCarbonEmissionsQueryTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#compartment_id MeteringComputationUsageCarbonEmissionsQuery#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.queryDefinition">queryDefinition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition">MeteringComputationUsageCarbonEmissionsQueryQueryDefinition</a></code> | query_definition block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#id MeteringComputationUsageCarbonEmissionsQuery#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts">MeteringComputationUsageCarbonEmissionsQueryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#compartment_id MeteringComputationUsageCarbonEmissionsQuery#compartment_id}.

---

##### `queryDefinition`<sup>Required</sup> <a name="queryDefinition" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.queryDefinition"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition">MeteringComputationUsageCarbonEmissionsQueryQueryDefinition</a>

query_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#query_definition MeteringComputationUsageCarbonEmissionsQuery#query_definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#id MeteringComputationUsageCarbonEmissionsQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts">MeteringComputationUsageCarbonEmissionsQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#timeouts MeteringComputationUsageCarbonEmissionsQuery#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.putQueryDefinition">putQueryDefinition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putQueryDefinition` <a name="putQueryDefinition" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.putQueryDefinition"></a>

```java
public void putQueryDefinition(MeteringComputationUsageCarbonEmissionsQueryQueryDefinition value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.putQueryDefinition.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition">MeteringComputationUsageCarbonEmissionsQueryQueryDefinition</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.putTimeouts"></a>

```java
public void putTimeouts(MeteringComputationUsageCarbonEmissionsQueryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts">MeteringComputationUsageCarbonEmissionsQueryTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MeteringComputationUsageCarbonEmissionsQuery resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emissions_query.MeteringComputationUsageCarbonEmissionsQuery;

MeteringComputationUsageCarbonEmissionsQuery.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emissions_query.MeteringComputationUsageCarbonEmissionsQuery;

MeteringComputationUsageCarbonEmissionsQuery.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emissions_query.MeteringComputationUsageCarbonEmissionsQuery;

MeteringComputationUsageCarbonEmissionsQuery.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emissions_query.MeteringComputationUsageCarbonEmissionsQuery;

MeteringComputationUsageCarbonEmissionsQuery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MeteringComputationUsageCarbonEmissionsQuery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MeteringComputationUsageCarbonEmissionsQuery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MeteringComputationUsageCarbonEmissionsQuery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MeteringComputationUsageCarbonEmissionsQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MeteringComputationUsageCarbonEmissionsQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.queryDefinition">queryDefinition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference">MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.queryDefinitionInput">queryDefinitionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition">MeteringComputationUsageCarbonEmissionsQueryQueryDefinition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts">MeteringComputationUsageCarbonEmissionsQueryTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `queryDefinition`<sup>Required</sup> <a name="queryDefinition" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.queryDefinition"></a>

```java
public MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference getQueryDefinition();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.timeouts"></a>

```java
public MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference">MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `queryDefinitionInput`<sup>Optional</sup> <a name="queryDefinitionInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.queryDefinitionInput"></a>

```java
public MeteringComputationUsageCarbonEmissionsQueryQueryDefinition getQueryDefinitionInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition">MeteringComputationUsageCarbonEmissionsQueryQueryDefinition</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts">MeteringComputationUsageCarbonEmissionsQueryTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MeteringComputationUsageCarbonEmissionsQueryConfig <a name="MeteringComputationUsageCarbonEmissionsQueryConfig" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emissions_query.MeteringComputationUsageCarbonEmissionsQueryConfig;

MeteringComputationUsageCarbonEmissionsQueryConfig.builder()
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
    .queryDefinition(MeteringComputationUsageCarbonEmissionsQueryQueryDefinition)
//  .id(java.lang.String)
//  .timeouts(MeteringComputationUsageCarbonEmissionsQueryTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#compartment_id MeteringComputationUsageCarbonEmissionsQuery#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.queryDefinition">queryDefinition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition">MeteringComputationUsageCarbonEmissionsQueryQueryDefinition</a></code> | query_definition block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#id MeteringComputationUsageCarbonEmissionsQuery#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts">MeteringComputationUsageCarbonEmissionsQueryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#compartment_id MeteringComputationUsageCarbonEmissionsQuery#compartment_id}.

---

##### `queryDefinition`<sup>Required</sup> <a name="queryDefinition" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.queryDefinition"></a>

```java
public MeteringComputationUsageCarbonEmissionsQueryQueryDefinition getQueryDefinition();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition">MeteringComputationUsageCarbonEmissionsQueryQueryDefinition</a>

query_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#query_definition MeteringComputationUsageCarbonEmissionsQuery#query_definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#id MeteringComputationUsageCarbonEmissionsQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.timeouts"></a>

```java
public MeteringComputationUsageCarbonEmissionsQueryTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts">MeteringComputationUsageCarbonEmissionsQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#timeouts MeteringComputationUsageCarbonEmissionsQuery#timeouts}

---

### MeteringComputationUsageCarbonEmissionsQueryQueryDefinition <a name="MeteringComputationUsageCarbonEmissionsQueryQueryDefinition" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emissions_query.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition;

MeteringComputationUsageCarbonEmissionsQueryQueryDefinition.builder()
    .costAnalysisUi(MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi)
    .displayName(java.lang.String)
    .reportQuery(MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery)
    .version(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition.property.costAnalysisUi">costAnalysisUi</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi</a></code> | cost_analysis_ui block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#display_name MeteringComputationUsageCarbonEmissionsQuery#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition.property.reportQuery">reportQuery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery</a></code> | report_query block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition.property.version">version</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#version MeteringComputationUsageCarbonEmissionsQuery#version}. |

---

##### `costAnalysisUi`<sup>Required</sup> <a name="costAnalysisUi" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition.property.costAnalysisUi"></a>

```java
public MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi getCostAnalysisUi();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi</a>

cost_analysis_ui block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#cost_analysis_ui MeteringComputationUsageCarbonEmissionsQuery#cost_analysis_ui}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#display_name MeteringComputationUsageCarbonEmissionsQuery#display_name}.

---

##### `reportQuery`<sup>Required</sup> <a name="reportQuery" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition.property.reportQuery"></a>

```java
public MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery getReportQuery();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery</a>

report_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#report_query MeteringComputationUsageCarbonEmissionsQuery#report_query}

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#version MeteringComputationUsageCarbonEmissionsQuery#version}.

---

### MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi <a name="MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emissions_query.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi;

MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi.builder()
//  .graph(java.lang.String)
//  .isCumulativeGraph(java.lang.Boolean)
//  .isCumulativeGraph(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi.property.graph">graph</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#graph MeteringComputationUsageCarbonEmissionsQuery#graph}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi.property.isCumulativeGraph">isCumulativeGraph</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#is_cumulative_graph MeteringComputationUsageCarbonEmissionsQuery#is_cumulative_graph}. |

---

##### `graph`<sup>Optional</sup> <a name="graph" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi.property.graph"></a>

```java
public java.lang.String getGraph();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#graph MeteringComputationUsageCarbonEmissionsQuery#graph}.

---

##### `isCumulativeGraph`<sup>Optional</sup> <a name="isCumulativeGraph" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi.property.isCumulativeGraph"></a>

```java
public java.lang.Object getIsCumulativeGraph();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#is_cumulative_graph MeteringComputationUsageCarbonEmissionsQuery#is_cumulative_graph}.

---

### MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery <a name="MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emissions_query.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery;

MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.builder()
    .tenantId(java.lang.String)
//  .compartmentDepth(java.lang.Number)
//  .dateRangeName(java.lang.String)
//  .groupBy(java.util.List<java.lang.String>)
//  .groupByTag(IResolvable)
//  .groupByTag(java.util.List<MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag>)
//  .isAggregateByTime(java.lang.Boolean)
//  .isAggregateByTime(IResolvable)
//  .timeUsageEnded(java.lang.String)
//  .timeUsageStarted(java.lang.String)
//  .usageCarbonEmissionsQueryFilter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#tenant_id MeteringComputationUsageCarbonEmissionsQuery#tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.compartmentDepth">compartmentDepth</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#compartment_depth MeteringComputationUsageCarbonEmissionsQuery#compartment_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.dateRangeName">dateRangeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#date_range_name MeteringComputationUsageCarbonEmissionsQuery#date_range_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.groupBy">groupBy</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#group_by MeteringComputationUsageCarbonEmissionsQuery#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.groupByTag">groupByTag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag</a>></code> | group_by_tag block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.isAggregateByTime">isAggregateByTime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#is_aggregate_by_time MeteringComputationUsageCarbonEmissionsQuery#is_aggregate_by_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.timeUsageEnded">timeUsageEnded</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#time_usage_ended MeteringComputationUsageCarbonEmissionsQuery#time_usage_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.timeUsageStarted">timeUsageStarted</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#time_usage_started MeteringComputationUsageCarbonEmissionsQuery#time_usage_started}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.usageCarbonEmissionsQueryFilter">usageCarbonEmissionsQueryFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#usage_carbon_emissions_query_filter MeteringComputationUsageCarbonEmissionsQuery#usage_carbon_emissions_query_filter}. |

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#tenant_id MeteringComputationUsageCarbonEmissionsQuery#tenant_id}.

---

##### `compartmentDepth`<sup>Optional</sup> <a name="compartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.compartmentDepth"></a>

```java
public java.lang.Number getCompartmentDepth();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#compartment_depth MeteringComputationUsageCarbonEmissionsQuery#compartment_depth}.

---

##### `dateRangeName`<sup>Optional</sup> <a name="dateRangeName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.dateRangeName"></a>

```java
public java.lang.String getDateRangeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#date_range_name MeteringComputationUsageCarbonEmissionsQuery#date_range_name}.

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.groupBy"></a>

```java
public java.util.List<java.lang.String> getGroupBy();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#group_by MeteringComputationUsageCarbonEmissionsQuery#group_by}.

---

##### `groupByTag`<sup>Optional</sup> <a name="groupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.groupByTag"></a>

```java
public java.lang.Object getGroupByTag();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag</a>>

group_by_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#group_by_tag MeteringComputationUsageCarbonEmissionsQuery#group_by_tag}

---

##### `isAggregateByTime`<sup>Optional</sup> <a name="isAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.isAggregateByTime"></a>

```java
public java.lang.Object getIsAggregateByTime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#is_aggregate_by_time MeteringComputationUsageCarbonEmissionsQuery#is_aggregate_by_time}.

---

##### `timeUsageEnded`<sup>Optional</sup> <a name="timeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.timeUsageEnded"></a>

```java
public java.lang.String getTimeUsageEnded();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#time_usage_ended MeteringComputationUsageCarbonEmissionsQuery#time_usage_ended}.

---

##### `timeUsageStarted`<sup>Optional</sup> <a name="timeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.timeUsageStarted"></a>

```java
public java.lang.String getTimeUsageStarted();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#time_usage_started MeteringComputationUsageCarbonEmissionsQuery#time_usage_started}.

---

##### `usageCarbonEmissionsQueryFilter`<sup>Optional</sup> <a name="usageCarbonEmissionsQueryFilter" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.usageCarbonEmissionsQueryFilter"></a>

```java
public java.lang.String getUsageCarbonEmissionsQueryFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#usage_carbon_emissions_query_filter MeteringComputationUsageCarbonEmissionsQuery#usage_carbon_emissions_query_filter}.

---

### MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag <a name="MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emissions_query.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag;

MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag.builder()
//  .key(java.lang.String)
//  .namespace(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#key MeteringComputationUsageCarbonEmissionsQuery#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#namespace MeteringComputationUsageCarbonEmissionsQuery#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#value MeteringComputationUsageCarbonEmissionsQuery#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#key MeteringComputationUsageCarbonEmissionsQuery#key}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#namespace MeteringComputationUsageCarbonEmissionsQuery#namespace}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#value MeteringComputationUsageCarbonEmissionsQuery#value}.

---

### MeteringComputationUsageCarbonEmissionsQueryTimeouts <a name="MeteringComputationUsageCarbonEmissionsQueryTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emissions_query.MeteringComputationUsageCarbonEmissionsQueryTimeouts;

MeteringComputationUsageCarbonEmissionsQueryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#create MeteringComputationUsageCarbonEmissionsQuery#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#delete MeteringComputationUsageCarbonEmissionsQuery#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#update MeteringComputationUsageCarbonEmissionsQuery#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#create MeteringComputationUsageCarbonEmissionsQuery#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#delete MeteringComputationUsageCarbonEmissionsQuery#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#update MeteringComputationUsageCarbonEmissionsQuery#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference <a name="MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emissions_query.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference;

new MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.resetGraph">resetGraph</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.resetIsCumulativeGraph">resetIsCumulativeGraph</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGraph` <a name="resetGraph" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.resetGraph"></a>

```java
public void resetGraph()
```

##### `resetIsCumulativeGraph` <a name="resetIsCumulativeGraph" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.resetIsCumulativeGraph"></a>

```java
public void resetIsCumulativeGraph()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.graphInput">graphInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraphInput">isCumulativeGraphInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.graph">graph</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraph">isCumulativeGraph</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `graphInput`<sup>Optional</sup> <a name="graphInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.graphInput"></a>

```java
public java.lang.String getGraphInput();
```

- *Type:* java.lang.String

---

##### `isCumulativeGraphInput`<sup>Optional</sup> <a name="isCumulativeGraphInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraphInput"></a>

```java
public java.lang.Object getIsCumulativeGraphInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `graph`<sup>Required</sup> <a name="graph" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.graph"></a>

```java
public java.lang.String getGraph();
```

- *Type:* java.lang.String

---

##### `isCumulativeGraph`<sup>Required</sup> <a name="isCumulativeGraph" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraph"></a>

```java
public java.lang.Object getIsCumulativeGraph();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.internalValue"></a>

```java
public MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi</a>

---


### MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference <a name="MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emissions_query.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference;

new MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.putCostAnalysisUi">putCostAnalysisUi</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.putReportQuery">putReportQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCostAnalysisUi` <a name="putCostAnalysisUi" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.putCostAnalysisUi"></a>

```java
public void putCostAnalysisUi(MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.putCostAnalysisUi.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi</a>

---

##### `putReportQuery` <a name="putReportQuery" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.putReportQuery"></a>

```java
public void putReportQuery(MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.putReportQuery.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.costAnalysisUi">costAnalysisUi</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.reportQuery">reportQuery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.costAnalysisUiInput">costAnalysisUiInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.reportQueryInput">reportQueryInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition">MeteringComputationUsageCarbonEmissionsQueryQueryDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `costAnalysisUi`<sup>Required</sup> <a name="costAnalysisUi" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.costAnalysisUi"></a>

```java
public MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference getCostAnalysisUi();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference</a>

---

##### `reportQuery`<sup>Required</sup> <a name="reportQuery" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.reportQuery"></a>

```java
public MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference getReportQuery();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference</a>

---

##### `costAnalysisUiInput`<sup>Optional</sup> <a name="costAnalysisUiInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.costAnalysisUiInput"></a>

```java
public MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi getCostAnalysisUiInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `reportQueryInput`<sup>Optional</sup> <a name="reportQueryInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.reportQueryInput"></a>

```java
public MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery getReportQueryInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.versionInput"></a>

```java
public java.lang.Number getVersionInput();
```

- *Type:* java.lang.Number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.internalValue"></a>

```java
public MeteringComputationUsageCarbonEmissionsQueryQueryDefinition getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition">MeteringComputationUsageCarbonEmissionsQueryQueryDefinition</a>

---


### MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList <a name="MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emissions_query.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList;

new MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.get"></a>

```java
public MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag</a>>

---


### MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference <a name="MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emissions_query.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference;

new MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag</a>

---


### MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference <a name="MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emissions_query.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference;

new MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.putGroupByTag">putGroupByTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetCompartmentDepth">resetCompartmentDepth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetDateRangeName">resetDateRangeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetGroupByTag">resetGroupByTag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetIsAggregateByTime">resetIsAggregateByTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetTimeUsageEnded">resetTimeUsageEnded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetTimeUsageStarted">resetTimeUsageStarted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetUsageCarbonEmissionsQueryFilter">resetUsageCarbonEmissionsQueryFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGroupByTag` <a name="putGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.putGroupByTag"></a>

```java
public void putGroupByTag(IResolvable OR java.util.List<MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.putGroupByTag.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag</a>>

---

##### `resetCompartmentDepth` <a name="resetCompartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetCompartmentDepth"></a>

```java
public void resetCompartmentDepth()
```

##### `resetDateRangeName` <a name="resetDateRangeName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetDateRangeName"></a>

```java
public void resetDateRangeName()
```

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetGroupBy"></a>

```java
public void resetGroupBy()
```

##### `resetGroupByTag` <a name="resetGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetGroupByTag"></a>

```java
public void resetGroupByTag()
```

##### `resetIsAggregateByTime` <a name="resetIsAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetIsAggregateByTime"></a>

```java
public void resetIsAggregateByTime()
```

##### `resetTimeUsageEnded` <a name="resetTimeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetTimeUsageEnded"></a>

```java
public void resetTimeUsageEnded()
```

##### `resetTimeUsageStarted` <a name="resetTimeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetTimeUsageStarted"></a>

```java
public void resetTimeUsageStarted()
```

##### `resetUsageCarbonEmissionsQueryFilter` <a name="resetUsageCarbonEmissionsQueryFilter" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetUsageCarbonEmissionsQueryFilter"></a>

```java
public void resetUsageCarbonEmissionsQueryFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.groupByTag">groupByTag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepthInput">compartmentDepthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.dateRangeNameInput">dateRangeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.groupByInput">groupByInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.groupByTagInput">groupByTagInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTimeInput">isAggregateByTimeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEndedInput">timeUsageEndedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStartedInput">timeUsageStartedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.usageCarbonEmissionsQueryFilterInput">usageCarbonEmissionsQueryFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepth">compartmentDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.dateRangeName">dateRangeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.groupBy">groupBy</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTime">isAggregateByTime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEnded">timeUsageEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStarted">timeUsageStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.usageCarbonEmissionsQueryFilter">usageCarbonEmissionsQueryFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupByTag`<sup>Required</sup> <a name="groupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.groupByTag"></a>

```java
public MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList getGroupByTag();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList</a>

---

##### `compartmentDepthInput`<sup>Optional</sup> <a name="compartmentDepthInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepthInput"></a>

```java
public java.lang.Number getCompartmentDepthInput();
```

- *Type:* java.lang.Number

---

##### `dateRangeNameInput`<sup>Optional</sup> <a name="dateRangeNameInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.dateRangeNameInput"></a>

```java
public java.lang.String getDateRangeNameInput();
```

- *Type:* java.lang.String

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.groupByInput"></a>

```java
public java.util.List<java.lang.String> getGroupByInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupByTagInput`<sup>Optional</sup> <a name="groupByTagInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.groupByTagInput"></a>

```java
public java.lang.Object getGroupByTagInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag</a>>

---

##### `isAggregateByTimeInput`<sup>Optional</sup> <a name="isAggregateByTimeInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTimeInput"></a>

```java
public java.lang.Object getIsAggregateByTimeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeUsageEndedInput`<sup>Optional</sup> <a name="timeUsageEndedInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEndedInput"></a>

```java
public java.lang.String getTimeUsageEndedInput();
```

- *Type:* java.lang.String

---

##### `timeUsageStartedInput`<sup>Optional</sup> <a name="timeUsageStartedInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStartedInput"></a>

```java
public java.lang.String getTimeUsageStartedInput();
```

- *Type:* java.lang.String

---

##### `usageCarbonEmissionsQueryFilterInput`<sup>Optional</sup> <a name="usageCarbonEmissionsQueryFilterInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.usageCarbonEmissionsQueryFilterInput"></a>

```java
public java.lang.String getUsageCarbonEmissionsQueryFilterInput();
```

- *Type:* java.lang.String

---

##### `compartmentDepth`<sup>Required</sup> <a name="compartmentDepth" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepth"></a>

```java
public java.lang.Number getCompartmentDepth();
```

- *Type:* java.lang.Number

---

##### `dateRangeName`<sup>Required</sup> <a name="dateRangeName" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.dateRangeName"></a>

```java
public java.lang.String getDateRangeName();
```

- *Type:* java.lang.String

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.groupBy"></a>

```java
public java.util.List<java.lang.String> getGroupBy();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isAggregateByTime`<sup>Required</sup> <a name="isAggregateByTime" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTime"></a>

```java
public java.lang.Object getIsAggregateByTime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `timeUsageEnded`<sup>Required</sup> <a name="timeUsageEnded" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEnded"></a>

```java
public java.lang.String getTimeUsageEnded();
```

- *Type:* java.lang.String

---

##### `timeUsageStarted`<sup>Required</sup> <a name="timeUsageStarted" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStarted"></a>

```java
public java.lang.String getTimeUsageStarted();
```

- *Type:* java.lang.String

---

##### `usageCarbonEmissionsQueryFilter`<sup>Required</sup> <a name="usageCarbonEmissionsQueryFilter" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.usageCarbonEmissionsQueryFilter"></a>

```java
public java.lang.String getUsageCarbonEmissionsQueryFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.internalValue"></a>

```java
public MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery</a>

---


### MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference <a name="MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.metering_computation_usage_carbon_emissions_query.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference;

new MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts">MeteringComputationUsageCarbonEmissionsQueryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts">MeteringComputationUsageCarbonEmissionsQueryTimeouts</a>

---



