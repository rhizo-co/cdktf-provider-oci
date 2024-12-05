# `generativeAiAgentDataSource` Submodule <a name="`generativeAiAgentDataSource` Submodule" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenerativeAiAgentDataSource <a name="GenerativeAiAgentDataSource" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source oci_generative_ai_agent_data_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.generative_ai_agent_data_source.GenerativeAiAgentDataSource;

GenerativeAiAgentDataSource.Builder.create(Construct scope, java.lang.String id)
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
    .dataSourceConfig(GenerativeAiAgentDataSourceDataSourceConfig)
    .knowledgeBaseId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(GenerativeAiAgentDataSourceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#compartment_id GenerativeAiAgentDataSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.dataSourceConfig">dataSourceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig">GenerativeAiAgentDataSourceDataSourceConfig</a></code> | data_source_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.knowledgeBaseId">knowledgeBaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#knowledge_base_id GenerativeAiAgentDataSource#knowledge_base_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#defined_tags GenerativeAiAgentDataSource#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#description GenerativeAiAgentDataSource#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#display_name GenerativeAiAgentDataSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#freeform_tags GenerativeAiAgentDataSource#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#id GenerativeAiAgentDataSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts">GenerativeAiAgentDataSourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#compartment_id GenerativeAiAgentDataSource#compartment_id}.

---

##### `dataSourceConfig`<sup>Required</sup> <a name="dataSourceConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.dataSourceConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig">GenerativeAiAgentDataSourceDataSourceConfig</a>

data_source_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#data_source_config GenerativeAiAgentDataSource#data_source_config}

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.knowledgeBaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#knowledge_base_id GenerativeAiAgentDataSource#knowledge_base_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#defined_tags GenerativeAiAgentDataSource#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#description GenerativeAiAgentDataSource#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#display_name GenerativeAiAgentDataSource#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#freeform_tags GenerativeAiAgentDataSource#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#id GenerativeAiAgentDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts">GenerativeAiAgentDataSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#timeouts GenerativeAiAgentDataSource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.putDataSourceConfig">putDataSourceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataSourceConfig` <a name="putDataSourceConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.putDataSourceConfig"></a>

```java
public void putDataSourceConfig(GenerativeAiAgentDataSourceDataSourceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.putDataSourceConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig">GenerativeAiAgentDataSourceDataSourceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.putTimeouts"></a>

```java
public void putTimeouts(GenerativeAiAgentDataSourceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts">GenerativeAiAgentDataSourceTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GenerativeAiAgentDataSource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.generative_ai_agent_data_source.GenerativeAiAgentDataSource;

GenerativeAiAgentDataSource.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.generative_ai_agent_data_source.GenerativeAiAgentDataSource;

GenerativeAiAgentDataSource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.generative_ai_agent_data_source.GenerativeAiAgentDataSource;

GenerativeAiAgentDataSource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.generative_ai_agent_data_source.GenerativeAiAgentDataSource;

GenerativeAiAgentDataSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GenerativeAiAgentDataSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GenerativeAiAgentDataSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GenerativeAiAgentDataSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GenerativeAiAgentDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GenerativeAiAgentDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.dataSourceConfig">dataSourceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference">GenerativeAiAgentDataSourceDataSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference">GenerativeAiAgentDataSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.dataSourceConfigInput">dataSourceConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig">GenerativeAiAgentDataSourceDataSourceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.knowledgeBaseIdInput">knowledgeBaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts">GenerativeAiAgentDataSourceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataSourceConfig`<sup>Required</sup> <a name="dataSourceConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.dataSourceConfig"></a>

```java
public GenerativeAiAgentDataSourceDataSourceConfigOutputReference getDataSourceConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference">GenerativeAiAgentDataSourceDataSourceConfigOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.timeouts"></a>

```java
public GenerativeAiAgentDataSourceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference">GenerativeAiAgentDataSourceTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `dataSourceConfigInput`<sup>Optional</sup> <a name="dataSourceConfigInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.dataSourceConfigInput"></a>

```java
public GenerativeAiAgentDataSourceDataSourceConfig getDataSourceConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig">GenerativeAiAgentDataSourceDataSourceConfig</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseIdInput`<sup>Optional</sup> <a name="knowledgeBaseIdInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.knowledgeBaseIdInput"></a>

```java
public java.lang.String getKnowledgeBaseIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts">GenerativeAiAgentDataSourceTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.knowledgeBaseId"></a>

```java
public java.lang.String getKnowledgeBaseId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GenerativeAiAgentDataSourceConfig <a name="GenerativeAiAgentDataSourceConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.generative_ai_agent_data_source.GenerativeAiAgentDataSourceConfig;

GenerativeAiAgentDataSourceConfig.builder()
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
    .dataSourceConfig(GenerativeAiAgentDataSourceDataSourceConfig)
    .knowledgeBaseId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(GenerativeAiAgentDataSourceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#compartment_id GenerativeAiAgentDataSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.dataSourceConfig">dataSourceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig">GenerativeAiAgentDataSourceDataSourceConfig</a></code> | data_source_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#knowledge_base_id GenerativeAiAgentDataSource#knowledge_base_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#defined_tags GenerativeAiAgentDataSource#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#description GenerativeAiAgentDataSource#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#display_name GenerativeAiAgentDataSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#freeform_tags GenerativeAiAgentDataSource#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#id GenerativeAiAgentDataSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts">GenerativeAiAgentDataSourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#compartment_id GenerativeAiAgentDataSource#compartment_id}.

---

##### `dataSourceConfig`<sup>Required</sup> <a name="dataSourceConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.dataSourceConfig"></a>

```java
public GenerativeAiAgentDataSourceDataSourceConfig getDataSourceConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig">GenerativeAiAgentDataSourceDataSourceConfig</a>

data_source_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#data_source_config GenerativeAiAgentDataSource#data_source_config}

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.knowledgeBaseId"></a>

```java
public java.lang.String getKnowledgeBaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#knowledge_base_id GenerativeAiAgentDataSource#knowledge_base_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#defined_tags GenerativeAiAgentDataSource#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#description GenerativeAiAgentDataSource#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#display_name GenerativeAiAgentDataSource#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#freeform_tags GenerativeAiAgentDataSource#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#id GenerativeAiAgentDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceConfig.property.timeouts"></a>

```java
public GenerativeAiAgentDataSourceTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts">GenerativeAiAgentDataSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#timeouts GenerativeAiAgentDataSource#timeouts}

---

### GenerativeAiAgentDataSourceDataSourceConfig <a name="GenerativeAiAgentDataSourceDataSourceConfig" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.generative_ai_agent_data_source.GenerativeAiAgentDataSourceDataSourceConfig;

GenerativeAiAgentDataSourceDataSourceConfig.builder()
    .dataSourceConfigType(java.lang.String)
    .objectStoragePrefixes(IResolvable)
    .objectStoragePrefixes(java.util.List<GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig.property.dataSourceConfigType">dataSourceConfigType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#data_source_config_type GenerativeAiAgentDataSource#data_source_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig.property.objectStoragePrefixes">objectStoragePrefixes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes</a>></code> | object_storage_prefixes block. |

---

##### `dataSourceConfigType`<sup>Required</sup> <a name="dataSourceConfigType" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig.property.dataSourceConfigType"></a>

```java
public java.lang.String getDataSourceConfigType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#data_source_config_type GenerativeAiAgentDataSource#data_source_config_type}.

---

##### `objectStoragePrefixes`<sup>Required</sup> <a name="objectStoragePrefixes" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig.property.objectStoragePrefixes"></a>

```java
public java.lang.Object getObjectStoragePrefixes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes</a>>

object_storage_prefixes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#object_storage_prefixes GenerativeAiAgentDataSource#object_storage_prefixes}

---

### GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes <a name="GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.generative_ai_agent_data_source.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes;

GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes.builder()
    .bucket(java.lang.String)
    .namespace(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#bucket GenerativeAiAgentDataSource#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#namespace GenerativeAiAgentDataSource#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#prefix GenerativeAiAgentDataSource#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#bucket GenerativeAiAgentDataSource#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#namespace GenerativeAiAgentDataSource#namespace}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#prefix GenerativeAiAgentDataSource#prefix}.

---

### GenerativeAiAgentDataSourceTimeouts <a name="GenerativeAiAgentDataSourceTimeouts" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.generative_ai_agent_data_source.GenerativeAiAgentDataSourceTimeouts;

GenerativeAiAgentDataSourceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#create GenerativeAiAgentDataSource#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#delete GenerativeAiAgentDataSource#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#update GenerativeAiAgentDataSource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#create GenerativeAiAgentDataSource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#delete GenerativeAiAgentDataSource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/generative_ai_agent_data_source#update GenerativeAiAgentDataSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList <a name="GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.generative_ai_agent_data_source.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList;

new GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.get"></a>

```java
public GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes</a>>

---


### GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference <a name="GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.generative_ai_agent_data_source.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference;

new GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes</a>

---


### GenerativeAiAgentDataSourceDataSourceConfigOutputReference <a name="GenerativeAiAgentDataSourceDataSourceConfigOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.generative_ai_agent_data_source.GenerativeAiAgentDataSourceDataSourceConfigOutputReference;

new GenerativeAiAgentDataSourceDataSourceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.putObjectStoragePrefixes">putObjectStoragePrefixes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putObjectStoragePrefixes` <a name="putObjectStoragePrefixes" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.putObjectStoragePrefixes"></a>

```java
public void putObjectStoragePrefixes(IResolvable OR java.util.List<GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.putObjectStoragePrefixes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.objectStoragePrefixes">objectStoragePrefixes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.dataSourceConfigTypeInput">dataSourceConfigTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.objectStoragePrefixesInput">objectStoragePrefixesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.dataSourceConfigType">dataSourceConfigType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig">GenerativeAiAgentDataSourceDataSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectStoragePrefixes`<sup>Required</sup> <a name="objectStoragePrefixes" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.objectStoragePrefixes"></a>

```java
public GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList getObjectStoragePrefixes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixesList</a>

---

##### `dataSourceConfigTypeInput`<sup>Optional</sup> <a name="dataSourceConfigTypeInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.dataSourceConfigTypeInput"></a>

```java
public java.lang.String getDataSourceConfigTypeInput();
```

- *Type:* java.lang.String

---

##### `objectStoragePrefixesInput`<sup>Optional</sup> <a name="objectStoragePrefixesInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.objectStoragePrefixesInput"></a>

```java
public java.lang.Object getObjectStoragePrefixesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes">GenerativeAiAgentDataSourceDataSourceConfigObjectStoragePrefixes</a>>

---

##### `dataSourceConfigType`<sup>Required</sup> <a name="dataSourceConfigType" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.dataSourceConfigType"></a>

```java
public java.lang.String getDataSourceConfigType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfigOutputReference.property.internalValue"></a>

```java
public GenerativeAiAgentDataSourceDataSourceConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceDataSourceConfig">GenerativeAiAgentDataSourceDataSourceConfig</a>

---


### GenerativeAiAgentDataSourceTimeoutsOutputReference <a name="GenerativeAiAgentDataSourceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.generative_ai_agent_data_source.GenerativeAiAgentDataSourceTimeoutsOutputReference;

new GenerativeAiAgentDataSourceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts">GenerativeAiAgentDataSourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.generativeAiAgentDataSource.GenerativeAiAgentDataSourceTimeouts">GenerativeAiAgentDataSourceTimeouts</a>

---



