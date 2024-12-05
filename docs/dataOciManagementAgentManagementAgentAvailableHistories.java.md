# `dataOciManagementAgentManagementAgentAvailableHistories` Submodule <a name="`dataOciManagementAgentManagementAgentAvailableHistories` Submodule" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciManagementAgentManagementAgentAvailableHistories <a name="DataOciManagementAgentManagementAgentAvailableHistories" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories oci_management_agent_management_agent_available_histories}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_management_agent_management_agent_available_histories.DataOciManagementAgentManagementAgentAvailableHistories;

DataOciManagementAgentManagementAgentAvailableHistories.Builder.create(Construct scope, java.lang.String id)
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
    .managementAgentId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciManagementAgentManagementAgentAvailableHistoriesFilter>)
//  .id(java.lang.String)
//  .timeAvailabilityStatusEndedGreaterThan(java.lang.String)
//  .timeAvailabilityStatusStartedLessThan(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.managementAgentId">managementAgentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#management_agent_id DataOciManagementAgentManagementAgentAvailableHistories#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#id DataOciManagementAgentManagementAgentAvailableHistories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.timeAvailabilityStatusEndedGreaterThan">timeAvailabilityStatusEndedGreaterThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_ended_greater_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_ended_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.timeAvailabilityStatusStartedLessThan">timeAvailabilityStatusStartedLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_started_less_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_started_less_than}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.managementAgentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#management_agent_id DataOciManagementAgentManagementAgentAvailableHistories#management_agent_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#filter DataOciManagementAgentManagementAgentAvailableHistories#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#id DataOciManagementAgentManagementAgentAvailableHistories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeAvailabilityStatusEndedGreaterThan`<sup>Optional</sup> <a name="timeAvailabilityStatusEndedGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.timeAvailabilityStatusEndedGreaterThan"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_ended_greater_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_ended_greater_than}.

---

##### `timeAvailabilityStatusStartedLessThan`<sup>Optional</sup> <a name="timeAvailabilityStatusStartedLessThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.Initializer.parameter.timeAvailabilityStatusStartedLessThan"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_started_less_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_started_less_than}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetTimeAvailabilityStatusEndedGreaterThan">resetTimeAvailabilityStatusEndedGreaterThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetTimeAvailabilityStatusStartedLessThan">resetTimeAvailabilityStatusStartedLessThan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciManagementAgentManagementAgentAvailableHistoriesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetId"></a>

```java
public void resetId()
```

##### `resetTimeAvailabilityStatusEndedGreaterThan` <a name="resetTimeAvailabilityStatusEndedGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetTimeAvailabilityStatusEndedGreaterThan"></a>

```java
public void resetTimeAvailabilityStatusEndedGreaterThan()
```

##### `resetTimeAvailabilityStatusStartedLessThan` <a name="resetTimeAvailabilityStatusStartedLessThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.resetTimeAvailabilityStatusStartedLessThan"></a>

```java
public void resetTimeAvailabilityStatusStartedLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciManagementAgentManagementAgentAvailableHistories resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_management_agent_management_agent_available_histories.DataOciManagementAgentManagementAgentAvailableHistories;

DataOciManagementAgentManagementAgentAvailableHistories.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_management_agent_management_agent_available_histories.DataOciManagementAgentManagementAgentAvailableHistories;

DataOciManagementAgentManagementAgentAvailableHistories.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_management_agent_management_agent_available_histories.DataOciManagementAgentManagementAgentAvailableHistories;

DataOciManagementAgentManagementAgentAvailableHistories.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_management_agent_management_agent_available_histories.DataOciManagementAgentManagementAgentAvailableHistories;

DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciManagementAgentManagementAgentAvailableHistories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciManagementAgentManagementAgentAvailableHistories to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciManagementAgentManagementAgentAvailableHistories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciManagementAgentManagementAgentAvailableHistories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.availabilityHistories">availabilityHistories</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList">DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList">DataOciManagementAgentManagementAgentAvailableHistoriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.managementAgentIdInput">managementAgentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusEndedGreaterThanInput">timeAvailabilityStatusEndedGreaterThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusStartedLessThanInput">timeAvailabilityStatusStartedLessThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.managementAgentId">managementAgentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusEndedGreaterThan">timeAvailabilityStatusEndedGreaterThan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusStartedLessThan">timeAvailabilityStatusStartedLessThan</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `availabilityHistories`<sup>Required</sup> <a name="availabilityHistories" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.availabilityHistories"></a>

```java
public DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList getAvailabilityHistories();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList">DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.filter"></a>

```java
public DataOciManagementAgentManagementAgentAvailableHistoriesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList">DataOciManagementAgentManagementAgentAvailableHistoriesFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managementAgentIdInput`<sup>Optional</sup> <a name="managementAgentIdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.managementAgentIdInput"></a>

```java
public java.lang.String getManagementAgentIdInput();
```

- *Type:* java.lang.String

---

##### `timeAvailabilityStatusEndedGreaterThanInput`<sup>Optional</sup> <a name="timeAvailabilityStatusEndedGreaterThanInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusEndedGreaterThanInput"></a>

```java
public java.lang.String getTimeAvailabilityStatusEndedGreaterThanInput();
```

- *Type:* java.lang.String

---

##### `timeAvailabilityStatusStartedLessThanInput`<sup>Optional</sup> <a name="timeAvailabilityStatusStartedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusStartedLessThanInput"></a>

```java
public java.lang.String getTimeAvailabilityStatusStartedLessThanInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.managementAgentId"></a>

```java
public java.lang.String getManagementAgentId();
```

- *Type:* java.lang.String

---

##### `timeAvailabilityStatusEndedGreaterThan`<sup>Required</sup> <a name="timeAvailabilityStatusEndedGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusEndedGreaterThan"></a>

```java
public java.lang.String getTimeAvailabilityStatusEndedGreaterThan();
```

- *Type:* java.lang.String

---

##### `timeAvailabilityStatusStartedLessThan`<sup>Required</sup> <a name="timeAvailabilityStatusStartedLessThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.timeAvailabilityStatusStartedLessThan"></a>

```java
public java.lang.String getTimeAvailabilityStatusStartedLessThan();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistories.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories <a name="DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_management_agent_management_agent_available_histories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories;

DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories.builder()
    .build();
```


### DataOciManagementAgentManagementAgentAvailableHistoriesConfig <a name="DataOciManagementAgentManagementAgentAvailableHistoriesConfig" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_management_agent_management_agent_available_histories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig;

DataOciManagementAgentManagementAgentAvailableHistoriesConfig.builder()
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
    .managementAgentId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciManagementAgentManagementAgentAvailableHistoriesFilter>)
//  .id(java.lang.String)
//  .timeAvailabilityStatusEndedGreaterThan(java.lang.String)
//  .timeAvailabilityStatusStartedLessThan(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.managementAgentId">managementAgentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#management_agent_id DataOciManagementAgentManagementAgentAvailableHistories#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#id DataOciManagementAgentManagementAgentAvailableHistories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.timeAvailabilityStatusEndedGreaterThan">timeAvailabilityStatusEndedGreaterThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_ended_greater_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_ended_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.timeAvailabilityStatusStartedLessThan">timeAvailabilityStatusStartedLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_started_less_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_started_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.managementAgentId"></a>

```java
public java.lang.String getManagementAgentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#management_agent_id DataOciManagementAgentManagementAgentAvailableHistories#management_agent_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#filter DataOciManagementAgentManagementAgentAvailableHistories#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#id DataOciManagementAgentManagementAgentAvailableHistories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeAvailabilityStatusEndedGreaterThan`<sup>Optional</sup> <a name="timeAvailabilityStatusEndedGreaterThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.timeAvailabilityStatusEndedGreaterThan"></a>

```java
public java.lang.String getTimeAvailabilityStatusEndedGreaterThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_ended_greater_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_ended_greater_than}.

---

##### `timeAvailabilityStatusStartedLessThan`<sup>Optional</sup> <a name="timeAvailabilityStatusStartedLessThan" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesConfig.property.timeAvailabilityStatusStartedLessThan"></a>

```java
public java.lang.String getTimeAvailabilityStatusStartedLessThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#time_availability_status_started_less_than DataOciManagementAgentManagementAgentAvailableHistories#time_availability_status_started_less_than}.

---

### DataOciManagementAgentManagementAgentAvailableHistoriesFilter <a name="DataOciManagementAgentManagementAgentAvailableHistoriesFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_management_agent_management_agent_available_histories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter;

DataOciManagementAgentManagementAgentAvailableHistoriesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#name DataOciManagementAgentManagementAgentAvailableHistories#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#values DataOciManagementAgentManagementAgentAvailableHistories#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#regex DataOciManagementAgentManagementAgentAvailableHistories#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#name DataOciManagementAgentManagementAgentAvailableHistories#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#values DataOciManagementAgentManagementAgentAvailableHistories#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_available_histories#regex DataOciManagementAgentManagementAgentAvailableHistories#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList <a name="DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_management_agent_management_agent_available_histories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList;

new DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.get"></a>

```java
public DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference <a name="DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_management_agent_management_agent_available_histories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference;

new DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.managementAgentId">managementAgentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.timeAvailabilityStatusEnded">timeAvailabilityStatusEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.timeAvailabilityStatusStarted">timeAvailabilityStatusStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories">DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityStatus`<sup>Required</sup> <a name="availabilityStatus" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.availabilityStatus"></a>

```java
public java.lang.String getAvailabilityStatus();
```

- *Type:* java.lang.String

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.managementAgentId"></a>

```java
public java.lang.String getManagementAgentId();
```

- *Type:* java.lang.String

---

##### `timeAvailabilityStatusEnded`<sup>Required</sup> <a name="timeAvailabilityStatusEnded" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.timeAvailabilityStatusEnded"></a>

```java
public java.lang.String getTimeAvailabilityStatusEnded();
```

- *Type:* java.lang.String

---

##### `timeAvailabilityStatusStarted`<sup>Required</sup> <a name="timeAvailabilityStatusStarted" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.timeAvailabilityStatusStarted"></a>

```java
public java.lang.String getTimeAvailabilityStatusStarted();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistoriesOutputReference.property.internalValue"></a>

```java
public DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories">DataOciManagementAgentManagementAgentAvailableHistoriesAvailabilityHistories</a>

---


### DataOciManagementAgentManagementAgentAvailableHistoriesFilterList <a name="DataOciManagementAgentManagementAgentAvailableHistoriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_management_agent_management_agent_available_histories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList;

new DataOciManagementAgentManagementAgentAvailableHistoriesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.get"></a>

```java
public DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>>

---


### DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference <a name="DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_management_agent_management_agent_available_histories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference;

new DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentAvailableHistories.DataOciManagementAgentManagementAgentAvailableHistoriesFilter">DataOciManagementAgentManagementAgentAvailableHistoriesFilter</a>

---



