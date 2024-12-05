# `logAnalyticsLogAnalyticsEntity` Submodule <a name="`logAnalyticsLogAnalyticsEntity` Submodule" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsLogAnalyticsEntity <a name="LogAnalyticsLogAnalyticsEntity" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity oci_log_analytics_log_analytics_entity}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.log_analytics_log_analytics_entity.LogAnalyticsLogAnalyticsEntity;

LogAnalyticsLogAnalyticsEntity.Builder.create(Construct scope, java.lang.String id)
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
    .entityTypeName(java.lang.String)
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .cloudResourceId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .hostname(java.lang.String)
//  .id(java.lang.String)
//  .managementAgentId(java.lang.String)
//  .metadata(LogAnalyticsLogAnalyticsEntityMetadata)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .sourceId(java.lang.String)
//  .timeLastDiscovered(java.lang.String)
//  .timeouts(LogAnalyticsLogAnalyticsEntityTimeouts)
//  .timezoneRegion(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#compartment_id LogAnalyticsLogAnalyticsEntity#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.entityTypeName">entityTypeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#entity_type_name LogAnalyticsLogAnalyticsEntity#entity_type_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#name LogAnalyticsLogAnalyticsEntity#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#namespace LogAnalyticsLogAnalyticsEntity#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.cloudResourceId">cloudResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#cloud_resource_id LogAnalyticsLogAnalyticsEntity#cloud_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#defined_tags LogAnalyticsLogAnalyticsEntity#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#freeform_tags LogAnalyticsLogAnalyticsEntity#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#hostname LogAnalyticsLogAnalyticsEntity#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#id LogAnalyticsLogAnalyticsEntity#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.managementAgentId">managementAgentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#management_agent_id LogAnalyticsLogAnalyticsEntity#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a></code> | metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#properties LogAnalyticsLogAnalyticsEntity#properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.sourceId">sourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#source_id LogAnalyticsLogAnalyticsEntity#source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.timeLastDiscovered">timeLastDiscovered</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#time_last_discovered LogAnalyticsLogAnalyticsEntity#time_last_discovered}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.timezoneRegion">timezoneRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#timezone_region LogAnalyticsLogAnalyticsEntity#timezone_region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#compartment_id LogAnalyticsLogAnalyticsEntity#compartment_id}.

---

##### `entityTypeName`<sup>Required</sup> <a name="entityTypeName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.entityTypeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#entity_type_name LogAnalyticsLogAnalyticsEntity#entity_type_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#name LogAnalyticsLogAnalyticsEntity#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#namespace LogAnalyticsLogAnalyticsEntity#namespace}.

---

##### `cloudResourceId`<sup>Optional</sup> <a name="cloudResourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.cloudResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#cloud_resource_id LogAnalyticsLogAnalyticsEntity#cloud_resource_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#defined_tags LogAnalyticsLogAnalyticsEntity#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#freeform_tags LogAnalyticsLogAnalyticsEntity#freeform_tags}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#hostname LogAnalyticsLogAnalyticsEntity#hostname}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#id LogAnalyticsLogAnalyticsEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managementAgentId`<sup>Optional</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.managementAgentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#management_agent_id LogAnalyticsLogAnalyticsEntity#management_agent_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.metadata"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#metadata LogAnalyticsLogAnalyticsEntity#metadata}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.properties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#properties LogAnalyticsLogAnalyticsEntity#properties}.

---

##### `sourceId`<sup>Optional</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.sourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#source_id LogAnalyticsLogAnalyticsEntity#source_id}.

---

##### `timeLastDiscovered`<sup>Optional</sup> <a name="timeLastDiscovered" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.timeLastDiscovered"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#time_last_discovered LogAnalyticsLogAnalyticsEntity#time_last_discovered}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#timeouts LogAnalyticsLogAnalyticsEntity#timeouts}

---

##### `timezoneRegion`<sup>Optional</sup> <a name="timezoneRegion" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.Initializer.parameter.timezoneRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#timezone_region LogAnalyticsLogAnalyticsEntity#timezone_region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetCloudResourceId">resetCloudResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetManagementAgentId">resetManagementAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetSourceId">resetSourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimeLastDiscovered">resetTimeLastDiscovered</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimezoneRegion">resetTimezoneRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putMetadata"></a>

```java
public void putMetadata(LogAnalyticsLogAnalyticsEntityMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putMetadata.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putTimeouts"></a>

```java
public void putTimeouts(LogAnalyticsLogAnalyticsEntityTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a>

---

##### `resetCloudResourceId` <a name="resetCloudResourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetCloudResourceId"></a>

```java
public void resetCloudResourceId()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetHostname` <a name="resetHostname" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetId"></a>

```java
public void resetId()
```

##### `resetManagementAgentId` <a name="resetManagementAgentId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetManagementAgentId"></a>

```java
public void resetManagementAgentId()
```

##### `resetMetadata` <a name="resetMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetProperties` <a name="resetProperties" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetSourceId` <a name="resetSourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetSourceId"></a>

```java
public void resetSourceId()
```

##### `resetTimeLastDiscovered` <a name="resetTimeLastDiscovered" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimeLastDiscovered"></a>

```java
public void resetTimeLastDiscovered()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimezoneRegion` <a name="resetTimezoneRegion" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.resetTimezoneRegion"></a>

```java
public void resetTimezoneRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LogAnalyticsLogAnalyticsEntity resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.log_analytics_log_analytics_entity.LogAnalyticsLogAnalyticsEntity;

LogAnalyticsLogAnalyticsEntity.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.log_analytics_log_analytics_entity.LogAnalyticsLogAnalyticsEntity;

LogAnalyticsLogAnalyticsEntity.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.log_analytics_log_analytics_entity.LogAnalyticsLogAnalyticsEntity;

LogAnalyticsLogAnalyticsEntity.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.log_analytics_log_analytics_entity.LogAnalyticsLogAnalyticsEntity;

LogAnalyticsLogAnalyticsEntity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LogAnalyticsLogAnalyticsEntity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LogAnalyticsLogAnalyticsEntity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LogAnalyticsLogAnalyticsEntity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LogAnalyticsLogAnalyticsEntity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsLogAnalyticsEntity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.areLogsCollected">areLogsCollected</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeInternalName">entityTypeInternalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentCompartmentId">managementAgentCompartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentDisplayName">managementAgentDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference">LogAnalyticsLogAnalyticsEntityMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference">LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cloudResourceIdInput">cloudResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeNameInput">entityTypeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentIdInput">managementAgentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.metadataInput">metadataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.sourceIdInput">sourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeLastDiscoveredInput">timeLastDiscoveredInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timezoneRegionInput">timezoneRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cloudResourceId">cloudResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeName">entityTypeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentId">managementAgentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.sourceId">sourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeLastDiscovered">timeLastDiscovered</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timezoneRegion">timezoneRegion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `areLogsCollected`<sup>Required</sup> <a name="areLogsCollected" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.areLogsCollected"></a>

```java
public IResolvable getAreLogsCollected();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `entityTypeInternalName`<sup>Required</sup> <a name="entityTypeInternalName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeInternalName"></a>

```java
public java.lang.String getEntityTypeInternalName();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `managementAgentCompartmentId`<sup>Required</sup> <a name="managementAgentCompartmentId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentCompartmentId"></a>

```java
public java.lang.String getManagementAgentCompartmentId();
```

- *Type:* java.lang.String

---

##### `managementAgentDisplayName`<sup>Required</sup> <a name="managementAgentDisplayName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentDisplayName"></a>

```java
public java.lang.String getManagementAgentDisplayName();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.metadata"></a>

```java
public LogAnalyticsLogAnalyticsEntityMetadataOutputReference getMetadata();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference">LogAnalyticsLogAnalyticsEntityMetadataOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeouts"></a>

```java
public LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference">LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `cloudResourceIdInput`<sup>Optional</sup> <a name="cloudResourceIdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cloudResourceIdInput"></a>

```java
public java.lang.String getCloudResourceIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `entityTypeNameInput`<sup>Optional</sup> <a name="entityTypeNameInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeNameInput"></a>

```java
public java.lang.String getEntityTypeNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managementAgentIdInput`<sup>Optional</sup> <a name="managementAgentIdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentIdInput"></a>

```java
public java.lang.String getManagementAgentIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.metadataInput"></a>

```java
public LogAnalyticsLogAnalyticsEntityMetadata getMetadataInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.sourceIdInput"></a>

```java
public java.lang.String getSourceIdInput();
```

- *Type:* java.lang.String

---

##### `timeLastDiscoveredInput`<sup>Optional</sup> <a name="timeLastDiscoveredInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeLastDiscoveredInput"></a>

```java
public java.lang.String getTimeLastDiscoveredInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a>

---

##### `timezoneRegionInput`<sup>Optional</sup> <a name="timezoneRegionInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timezoneRegionInput"></a>

```java
public java.lang.String getTimezoneRegionInput();
```

- *Type:* java.lang.String

---

##### `cloudResourceId`<sup>Required</sup> <a name="cloudResourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.cloudResourceId"></a>

```java
public java.lang.String getCloudResourceId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `entityTypeName`<sup>Required</sup> <a name="entityTypeName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.entityTypeName"></a>

```java
public java.lang.String getEntityTypeName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.managementAgentId"></a>

```java
public java.lang.String getManagementAgentId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.sourceId"></a>

```java
public java.lang.String getSourceId();
```

- *Type:* java.lang.String

---

##### `timeLastDiscovered`<sup>Required</sup> <a name="timeLastDiscovered" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timeLastDiscovered"></a>

```java
public java.lang.String getTimeLastDiscovered();
```

- *Type:* java.lang.String

---

##### `timezoneRegion`<sup>Required</sup> <a name="timezoneRegion" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.timezoneRegion"></a>

```java
public java.lang.String getTimezoneRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntity.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsLogAnalyticsEntityConfig <a name="LogAnalyticsLogAnalyticsEntityConfig" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.log_analytics_log_analytics_entity.LogAnalyticsLogAnalyticsEntityConfig;

LogAnalyticsLogAnalyticsEntityConfig.builder()
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
    .entityTypeName(java.lang.String)
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .cloudResourceId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .hostname(java.lang.String)
//  .id(java.lang.String)
//  .managementAgentId(java.lang.String)
//  .metadata(LogAnalyticsLogAnalyticsEntityMetadata)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
//  .sourceId(java.lang.String)
//  .timeLastDiscovered(java.lang.String)
//  .timeouts(LogAnalyticsLogAnalyticsEntityTimeouts)
//  .timezoneRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#compartment_id LogAnalyticsLogAnalyticsEntity#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.entityTypeName">entityTypeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#entity_type_name LogAnalyticsLogAnalyticsEntity#entity_type_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#name LogAnalyticsLogAnalyticsEntity#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#namespace LogAnalyticsLogAnalyticsEntity#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.cloudResourceId">cloudResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#cloud_resource_id LogAnalyticsLogAnalyticsEntity#cloud_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#defined_tags LogAnalyticsLogAnalyticsEntity#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#freeform_tags LogAnalyticsLogAnalyticsEntity#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#hostname LogAnalyticsLogAnalyticsEntity#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#id LogAnalyticsLogAnalyticsEntity#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.managementAgentId">managementAgentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#management_agent_id LogAnalyticsLogAnalyticsEntity#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a></code> | metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#properties LogAnalyticsLogAnalyticsEntity#properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.sourceId">sourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#source_id LogAnalyticsLogAnalyticsEntity#source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timeLastDiscovered">timeLastDiscovered</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#time_last_discovered LogAnalyticsLogAnalyticsEntity#time_last_discovered}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timezoneRegion">timezoneRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#timezone_region LogAnalyticsLogAnalyticsEntity#timezone_region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#compartment_id LogAnalyticsLogAnalyticsEntity#compartment_id}.

---

##### `entityTypeName`<sup>Required</sup> <a name="entityTypeName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.entityTypeName"></a>

```java
public java.lang.String getEntityTypeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#entity_type_name LogAnalyticsLogAnalyticsEntity#entity_type_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#name LogAnalyticsLogAnalyticsEntity#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#namespace LogAnalyticsLogAnalyticsEntity#namespace}.

---

##### `cloudResourceId`<sup>Optional</sup> <a name="cloudResourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.cloudResourceId"></a>

```java
public java.lang.String getCloudResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#cloud_resource_id LogAnalyticsLogAnalyticsEntity#cloud_resource_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#defined_tags LogAnalyticsLogAnalyticsEntity#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#freeform_tags LogAnalyticsLogAnalyticsEntity#freeform_tags}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#hostname LogAnalyticsLogAnalyticsEntity#hostname}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#id LogAnalyticsLogAnalyticsEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managementAgentId`<sup>Optional</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.managementAgentId"></a>

```java
public java.lang.String getManagementAgentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#management_agent_id LogAnalyticsLogAnalyticsEntity#management_agent_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.metadata"></a>

```java
public LogAnalyticsLogAnalyticsEntityMetadata getMetadata();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#metadata LogAnalyticsLogAnalyticsEntity#metadata}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#properties LogAnalyticsLogAnalyticsEntity#properties}.

---

##### `sourceId`<sup>Optional</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.sourceId"></a>

```java
public java.lang.String getSourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#source_id LogAnalyticsLogAnalyticsEntity#source_id}.

---

##### `timeLastDiscovered`<sup>Optional</sup> <a name="timeLastDiscovered" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timeLastDiscovered"></a>

```java
public java.lang.String getTimeLastDiscovered();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#time_last_discovered LogAnalyticsLogAnalyticsEntity#time_last_discovered}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timeouts"></a>

```java
public LogAnalyticsLogAnalyticsEntityTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#timeouts LogAnalyticsLogAnalyticsEntity#timeouts}

---

##### `timezoneRegion`<sup>Optional</sup> <a name="timezoneRegion" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityConfig.property.timezoneRegion"></a>

```java
public java.lang.String getTimezoneRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#timezone_region LogAnalyticsLogAnalyticsEntity#timezone_region}.

---

### LogAnalyticsLogAnalyticsEntityMetadata <a name="LogAnalyticsLogAnalyticsEntityMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.log_analytics_log_analytics_entity.LogAnalyticsLogAnalyticsEntityMetadata;

LogAnalyticsLogAnalyticsEntityMetadata.builder()
//  .items(IResolvable)
//  .items(java.util.List<LogAnalyticsLogAnalyticsEntityMetadataItems>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata.property.items">items</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>></code> | items block. |

---

##### `items`<sup>Optional</sup> <a name="items" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata.property.items"></a>

```java
public java.lang.Object getItems();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>>

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#items LogAnalyticsLogAnalyticsEntity#items}

---

### LogAnalyticsLogAnalyticsEntityMetadataItems <a name="LogAnalyticsLogAnalyticsEntityMetadataItems" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.log_analytics_log_analytics_entity.LogAnalyticsLogAnalyticsEntityMetadataItems;

LogAnalyticsLogAnalyticsEntityMetadataItems.builder()
//  .name(java.lang.String)
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#name LogAnalyticsLogAnalyticsEntity#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#type LogAnalyticsLogAnalyticsEntity#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#value LogAnalyticsLogAnalyticsEntity#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#name LogAnalyticsLogAnalyticsEntity#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#type LogAnalyticsLogAnalyticsEntity#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#value LogAnalyticsLogAnalyticsEntity#value}.

---

### LogAnalyticsLogAnalyticsEntityTimeouts <a name="LogAnalyticsLogAnalyticsEntityTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.log_analytics_log_analytics_entity.LogAnalyticsLogAnalyticsEntityTimeouts;

LogAnalyticsLogAnalyticsEntityTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#create LogAnalyticsLogAnalyticsEntity#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#delete LogAnalyticsLogAnalyticsEntity#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#update LogAnalyticsLogAnalyticsEntity#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#create LogAnalyticsLogAnalyticsEntity#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#delete LogAnalyticsLogAnalyticsEntity#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_entity#update LogAnalyticsLogAnalyticsEntity#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsLogAnalyticsEntityMetadataItemsList <a name="LogAnalyticsLogAnalyticsEntityMetadataItemsList" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.log_analytics_log_analytics_entity.LogAnalyticsLogAnalyticsEntityMetadataItemsList;

new LogAnalyticsLogAnalyticsEntityMetadataItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.get"></a>

```java
public LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>>

---


### LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference <a name="LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.log_analytics_log_analytics_entity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference;

new LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>

---


### LogAnalyticsLogAnalyticsEntityMetadataOutputReference <a name="LogAnalyticsLogAnalyticsEntityMetadataOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.log_analytics_log_analytics_entity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference;

new LogAnalyticsLogAnalyticsEntityMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.putItems">putItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.putItems"></a>

```java
public void putItems(IResolvable OR java.util.List<LogAnalyticsLogAnalyticsEntityMetadataItems> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.putItems.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>>

---

##### `resetItems` <a name="resetItems" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.resetItems"></a>

```java
public void resetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList">LogAnalyticsLogAnalyticsEntityMetadataItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.itemsInput">itemsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.items"></a>

```java
public LogAnalyticsLogAnalyticsEntityMetadataItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItemsList">LogAnalyticsLogAnalyticsEntityMetadataItemsList</a>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.itemsInput"></a>

```java
public java.lang.Object getItemsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataItems">LogAnalyticsLogAnalyticsEntityMetadataItems</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadataOutputReference.property.internalValue"></a>

```java
public LogAnalyticsLogAnalyticsEntityMetadata getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityMetadata">LogAnalyticsLogAnalyticsEntityMetadata</a>

---


### LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference <a name="LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.log_analytics_log_analytics_entity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference;

new LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsEntity.LogAnalyticsLogAnalyticsEntityTimeouts">LogAnalyticsLogAnalyticsEntityTimeouts</a>

---



