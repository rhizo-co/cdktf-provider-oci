# `aiDocumentProcessorJob` Submodule <a name="`aiDocumentProcessorJob` Submodule" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiDocumentProcessorJob <a name="AiDocumentProcessorJob" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job oci_ai_document_processor_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_processor_job.AiDocumentProcessorJob;

AiDocumentProcessorJob.Builder.create(Construct scope, java.lang.String id)
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
    .inputLocation(AiDocumentProcessorJobInputLocation)
    .outputLocation(AiDocumentProcessorJobOutputLocation)
    .processorConfig(AiDocumentProcessorJobProcessorConfig)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(AiDocumentProcessorJobTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#compartment_id AiDocumentProcessorJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.inputLocation">inputLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a></code> | input_location block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.outputLocation">outputLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a></code> | output_location block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.processorConfig">processorConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a></code> | processor_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#display_name AiDocumentProcessorJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#id AiDocumentProcessorJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#compartment_id AiDocumentProcessorJob#compartment_id}.

---

##### `inputLocation`<sup>Required</sup> <a name="inputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.inputLocation"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a>

input_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#input_location AiDocumentProcessorJob#input_location}

---

##### `outputLocation`<sup>Required</sup> <a name="outputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.outputLocation"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a>

output_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#output_location AiDocumentProcessorJob#output_location}

---

##### `processorConfig`<sup>Required</sup> <a name="processorConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.processorConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a>

processor_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#processor_config AiDocumentProcessorJob#processor_config}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#display_name AiDocumentProcessorJob#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#id AiDocumentProcessorJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#timeouts AiDocumentProcessorJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putInputLocation">putInputLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putOutputLocation">putOutputLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putProcessorConfig">putProcessorConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInputLocation` <a name="putInputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putInputLocation"></a>

```java
public void putInputLocation(AiDocumentProcessorJobInputLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putInputLocation.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a>

---

##### `putOutputLocation` <a name="putOutputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putOutputLocation"></a>

```java
public void putOutputLocation(AiDocumentProcessorJobOutputLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putOutputLocation.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a>

---

##### `putProcessorConfig` <a name="putProcessorConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putProcessorConfig"></a>

```java
public void putProcessorConfig(AiDocumentProcessorJobProcessorConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putProcessorConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putTimeouts"></a>

```java
public void putTimeouts(AiDocumentProcessorJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AiDocumentProcessorJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_processor_job.AiDocumentProcessorJob;

AiDocumentProcessorJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_processor_job.AiDocumentProcessorJob;

AiDocumentProcessorJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_processor_job.AiDocumentProcessorJob;

AiDocumentProcessorJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_processor_job.AiDocumentProcessorJob;

AiDocumentProcessorJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AiDocumentProcessorJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AiDocumentProcessorJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AiDocumentProcessorJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AiDocumentProcessorJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AiDocumentProcessorJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.inputLocation">inputLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference">AiDocumentProcessorJobInputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.outputLocation">outputLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference">AiDocumentProcessorJobOutputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.percentComplete">percentComplete</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.processorConfig">processorConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference">AiDocumentProcessorJobProcessorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeAccepted">timeAccepted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeFinished">timeFinished</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference">AiDocumentProcessorJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.inputLocationInput">inputLocationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.outputLocationInput">outputLocationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.processorConfigInput">processorConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `inputLocation`<sup>Required</sup> <a name="inputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.inputLocation"></a>

```java
public AiDocumentProcessorJobInputLocationOutputReference getInputLocation();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference">AiDocumentProcessorJobInputLocationOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `outputLocation`<sup>Required</sup> <a name="outputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.outputLocation"></a>

```java
public AiDocumentProcessorJobOutputLocationOutputReference getOutputLocation();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference">AiDocumentProcessorJobOutputLocationOutputReference</a>

---

##### `percentComplete`<sup>Required</sup> <a name="percentComplete" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.percentComplete"></a>

```java
public java.lang.Number getPercentComplete();
```

- *Type:* java.lang.Number

---

##### `processorConfig`<sup>Required</sup> <a name="processorConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.processorConfig"></a>

```java
public AiDocumentProcessorJobProcessorConfigOutputReference getProcessorConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference">AiDocumentProcessorJobProcessorConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeAccepted`<sup>Required</sup> <a name="timeAccepted" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeAccepted"></a>

```java
public java.lang.String getTimeAccepted();
```

- *Type:* java.lang.String

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeFinished"></a>

```java
public java.lang.String getTimeFinished();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeouts"></a>

```java
public AiDocumentProcessorJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference">AiDocumentProcessorJobTimeoutsOutputReference</a>

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputLocationInput`<sup>Optional</sup> <a name="inputLocationInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.inputLocationInput"></a>

```java
public AiDocumentProcessorJobInputLocation getInputLocationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a>

---

##### `outputLocationInput`<sup>Optional</sup> <a name="outputLocationInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.outputLocationInput"></a>

```java
public AiDocumentProcessorJobOutputLocation getOutputLocationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a>

---

##### `processorConfigInput`<sup>Optional</sup> <a name="processorConfigInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.processorConfigInput"></a>

```java
public AiDocumentProcessorJobProcessorConfig getProcessorConfigInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AiDocumentProcessorJobConfig <a name="AiDocumentProcessorJobConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_processor_job.AiDocumentProcessorJobConfig;

AiDocumentProcessorJobConfig.builder()
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
    .inputLocation(AiDocumentProcessorJobInputLocation)
    .outputLocation(AiDocumentProcessorJobOutputLocation)
    .processorConfig(AiDocumentProcessorJobProcessorConfig)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(AiDocumentProcessorJobTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#compartment_id AiDocumentProcessorJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.inputLocation">inputLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a></code> | input_location block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.outputLocation">outputLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a></code> | output_location block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.processorConfig">processorConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a></code> | processor_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#display_name AiDocumentProcessorJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#id AiDocumentProcessorJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#compartment_id AiDocumentProcessorJob#compartment_id}.

---

##### `inputLocation`<sup>Required</sup> <a name="inputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.inputLocation"></a>

```java
public AiDocumentProcessorJobInputLocation getInputLocation();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a>

input_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#input_location AiDocumentProcessorJob#input_location}

---

##### `outputLocation`<sup>Required</sup> <a name="outputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.outputLocation"></a>

```java
public AiDocumentProcessorJobOutputLocation getOutputLocation();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a>

output_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#output_location AiDocumentProcessorJob#output_location}

---

##### `processorConfig`<sup>Required</sup> <a name="processorConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.processorConfig"></a>

```java
public AiDocumentProcessorJobProcessorConfig getProcessorConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a>

processor_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#processor_config AiDocumentProcessorJob#processor_config}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#display_name AiDocumentProcessorJob#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#id AiDocumentProcessorJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobConfig.property.timeouts"></a>

```java
public AiDocumentProcessorJobTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#timeouts AiDocumentProcessorJob#timeouts}

---

### AiDocumentProcessorJobInputLocation <a name="AiDocumentProcessorJobInputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_processor_job.AiDocumentProcessorJobInputLocation;

AiDocumentProcessorJobInputLocation.builder()
    .sourceType(java.lang.String)
//  .data(java.lang.String)
//  .objectLocations(IResolvable)
//  .objectLocations(java.util.List<AiDocumentProcessorJobInputLocationObjectLocations>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#source_type AiDocumentProcessorJob#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.data">data</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#data AiDocumentProcessorJob#data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.objectLocations">objectLocations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>></code> | object_locations block. |

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#source_type AiDocumentProcessorJob#source_type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#data AiDocumentProcessorJob#data}.

---

##### `objectLocations`<sup>Optional</sup> <a name="objectLocations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation.property.objectLocations"></a>

```java
public java.lang.Object getObjectLocations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>>

object_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#object_locations AiDocumentProcessorJob#object_locations}

---

### AiDocumentProcessorJobInputLocationObjectLocations <a name="AiDocumentProcessorJobInputLocationObjectLocations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_processor_job.AiDocumentProcessorJobInputLocationObjectLocations;

AiDocumentProcessorJobInputLocationObjectLocations.builder()
//  .bucket(java.lang.String)
//  .namespace(java.lang.String)
//  .object(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.object">object</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#object AiDocumentProcessorJob#object}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#object AiDocumentProcessorJob#object}.

---

### AiDocumentProcessorJobOutputLocation <a name="AiDocumentProcessorJobOutputLocation" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_processor_job.AiDocumentProcessorJobOutputLocation;

AiDocumentProcessorJobOutputLocation.builder()
    .bucket(java.lang.String)
    .namespace(java.lang.String)
    .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#prefix AiDocumentProcessorJob#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#bucket AiDocumentProcessorJob#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#namespace AiDocumentProcessorJob#namespace}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#prefix AiDocumentProcessorJob#prefix}.

---

### AiDocumentProcessorJobProcessorConfig <a name="AiDocumentProcessorJobProcessorConfig" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_processor_job.AiDocumentProcessorJobProcessorConfig;

AiDocumentProcessorJobProcessorConfig.builder()
    .features(IResolvable)
    .features(java.util.List<AiDocumentProcessorJobProcessorConfigFeatures>)
    .processorType(java.lang.String)
//  .documentType(java.lang.String)
//  .isZipOutputEnabled(java.lang.Boolean)
//  .isZipOutputEnabled(IResolvable)
//  .language(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.features">features</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>></code> | features block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.processorType">processorType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#processor_type AiDocumentProcessorJob#processor_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.documentType">documentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#document_type AiDocumentProcessorJob#document_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.isZipOutputEnabled">isZipOutputEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#is_zip_output_enabled AiDocumentProcessorJob#is_zip_output_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.language">language</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#language AiDocumentProcessorJob#language}. |

---

##### `features`<sup>Required</sup> <a name="features" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.features"></a>

```java
public java.lang.Object getFeatures();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>>

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#features AiDocumentProcessorJob#features}

---

##### `processorType`<sup>Required</sup> <a name="processorType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.processorType"></a>

```java
public java.lang.String getProcessorType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#processor_type AiDocumentProcessorJob#processor_type}.

---

##### `documentType`<sup>Optional</sup> <a name="documentType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.documentType"></a>

```java
public java.lang.String getDocumentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#document_type AiDocumentProcessorJob#document_type}.

---

##### `isZipOutputEnabled`<sup>Optional</sup> <a name="isZipOutputEnabled" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.isZipOutputEnabled"></a>

```java
public java.lang.Object getIsZipOutputEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#is_zip_output_enabled AiDocumentProcessorJob#is_zip_output_enabled}.

---

##### `language`<sup>Optional</sup> <a name="language" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#language AiDocumentProcessorJob#language}.

---

### AiDocumentProcessorJobProcessorConfigFeatures <a name="AiDocumentProcessorJobProcessorConfigFeatures" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_processor_job.AiDocumentProcessorJobProcessorConfigFeatures;

AiDocumentProcessorJobProcessorConfigFeatures.builder()
    .featureType(java.lang.String)
//  .generateSearchablePdf(java.lang.Boolean)
//  .generateSearchablePdf(IResolvable)
//  .maxResults(java.lang.Number)
//  .modelId(java.lang.String)
//  .tenancyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.featureType">featureType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#feature_type AiDocumentProcessorJob#feature_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.generateSearchablePdf">generateSearchablePdf</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#generate_searchable_pdf AiDocumentProcessorJob#generate_searchable_pdf}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.maxResults">maxResults</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#max_results AiDocumentProcessorJob#max_results}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.modelId">modelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#model_id AiDocumentProcessorJob#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.tenancyId">tenancyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#tenancy_id AiDocumentProcessorJob#tenancy_id}. |

---

##### `featureType`<sup>Required</sup> <a name="featureType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.featureType"></a>

```java
public java.lang.String getFeatureType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#feature_type AiDocumentProcessorJob#feature_type}.

---

##### `generateSearchablePdf`<sup>Optional</sup> <a name="generateSearchablePdf" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.generateSearchablePdf"></a>

```java
public java.lang.Object getGenerateSearchablePdf();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#generate_searchable_pdf AiDocumentProcessorJob#generate_searchable_pdf}.

---

##### `maxResults`<sup>Optional</sup> <a name="maxResults" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.maxResults"></a>

```java
public java.lang.Number getMaxResults();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#max_results AiDocumentProcessorJob#max_results}.

---

##### `modelId`<sup>Optional</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#model_id AiDocumentProcessorJob#model_id}.

---

##### `tenancyId`<sup>Optional</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures.property.tenancyId"></a>

```java
public java.lang.String getTenancyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#tenancy_id AiDocumentProcessorJob#tenancy_id}.

---

### AiDocumentProcessorJobTimeouts <a name="AiDocumentProcessorJobTimeouts" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_processor_job.AiDocumentProcessorJobTimeouts;

AiDocumentProcessorJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#create AiDocumentProcessorJob#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#delete AiDocumentProcessorJob#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#update AiDocumentProcessorJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#create AiDocumentProcessorJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#delete AiDocumentProcessorJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_processor_job#update AiDocumentProcessorJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiDocumentProcessorJobInputLocationObjectLocationsList <a name="AiDocumentProcessorJobInputLocationObjectLocationsList" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_processor_job.AiDocumentProcessorJobInputLocationObjectLocationsList;

new AiDocumentProcessorJobInputLocationObjectLocationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.get"></a>

```java
public AiDocumentProcessorJobInputLocationObjectLocationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>>

---


### AiDocumentProcessorJobInputLocationObjectLocationsOutputReference <a name="AiDocumentProcessorJobInputLocationObjectLocationsOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_processor_job.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference;

new AiDocumentProcessorJobInputLocationObjectLocationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetObject">resetObject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetObject` <a name="resetObject" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resetObject"></a>

```java
public void resetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.objectInput">objectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.objectInput"></a>

```java
public java.lang.String getObjectInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>

---


### AiDocumentProcessorJobInputLocationOutputReference <a name="AiDocumentProcessorJobInputLocationOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_processor_job.AiDocumentProcessorJobInputLocationOutputReference;

new AiDocumentProcessorJobInputLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.putObjectLocations">putObjectLocations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resetObjectLocations">resetObjectLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putObjectLocations` <a name="putObjectLocations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.putObjectLocations"></a>

```java
public void putObjectLocations(IResolvable OR java.util.List<AiDocumentProcessorJobInputLocationObjectLocations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.putObjectLocations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>>

---

##### `resetData` <a name="resetData" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resetData"></a>

```java
public void resetData()
```

##### `resetObjectLocations` <a name="resetObjectLocations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.resetObjectLocations"></a>

```java
public void resetObjectLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.objectLocations">objectLocations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList">AiDocumentProcessorJobInputLocationObjectLocationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.dataInput">dataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.objectLocationsInput">objectLocationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectLocations`<sup>Required</sup> <a name="objectLocations" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.objectLocations"></a>

```java
public AiDocumentProcessorJobInputLocationObjectLocationsList getObjectLocations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocationsList">AiDocumentProcessorJobInputLocationObjectLocationsList</a>

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.dataInput"></a>

```java
public java.lang.String getDataInput();
```

- *Type:* java.lang.String

---

##### `objectLocationsInput`<sup>Optional</sup> <a name="objectLocationsInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.objectLocationsInput"></a>

```java
public java.lang.Object getObjectLocationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationObjectLocations">AiDocumentProcessorJobInputLocationObjectLocations</a>>

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.sourceTypeInput"></a>

```java
public java.lang.String getSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocationOutputReference.property.internalValue"></a>

```java
public AiDocumentProcessorJobInputLocation getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobInputLocation">AiDocumentProcessorJobInputLocation</a>

---


### AiDocumentProcessorJobOutputLocationOutputReference <a name="AiDocumentProcessorJobOutputLocationOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_processor_job.AiDocumentProcessorJobOutputLocationOutputReference;

new AiDocumentProcessorJobOutputLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocationOutputReference.property.internalValue"></a>

```java
public AiDocumentProcessorJobOutputLocation getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobOutputLocation">AiDocumentProcessorJobOutputLocation</a>

---


### AiDocumentProcessorJobProcessorConfigFeaturesList <a name="AiDocumentProcessorJobProcessorConfigFeaturesList" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_processor_job.AiDocumentProcessorJobProcessorConfigFeaturesList;

new AiDocumentProcessorJobProcessorConfigFeaturesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.get"></a>

```java
public AiDocumentProcessorJobProcessorConfigFeaturesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>>

---


### AiDocumentProcessorJobProcessorConfigFeaturesOutputReference <a name="AiDocumentProcessorJobProcessorConfigFeaturesOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_processor_job.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference;

new AiDocumentProcessorJobProcessorConfigFeaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetGenerateSearchablePdf">resetGenerateSearchablePdf</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetMaxResults">resetMaxResults</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetModelId">resetModelId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetTenancyId">resetTenancyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGenerateSearchablePdf` <a name="resetGenerateSearchablePdf" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetGenerateSearchablePdf"></a>

```java
public void resetGenerateSearchablePdf()
```

##### `resetMaxResults` <a name="resetMaxResults" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetMaxResults"></a>

```java
public void resetMaxResults()
```

##### `resetModelId` <a name="resetModelId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetModelId"></a>

```java
public void resetModelId()
```

##### `resetTenancyId` <a name="resetTenancyId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resetTenancyId"></a>

```java
public void resetTenancyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureTypeInput">featureTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdfInput">generateSearchablePdfInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResultsInput">maxResultsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelIdInput">modelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyIdInput">tenancyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureType">featureType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdf">generateSearchablePdf</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResults">maxResults</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelId">modelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyId">tenancyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `featureTypeInput`<sup>Optional</sup> <a name="featureTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureTypeInput"></a>

```java
public java.lang.String getFeatureTypeInput();
```

- *Type:* java.lang.String

---

##### `generateSearchablePdfInput`<sup>Optional</sup> <a name="generateSearchablePdfInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdfInput"></a>

```java
public java.lang.Object getGenerateSearchablePdfInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxResultsInput`<sup>Optional</sup> <a name="maxResultsInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResultsInput"></a>

```java
public java.lang.Number getMaxResultsInput();
```

- *Type:* java.lang.Number

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelIdInput"></a>

```java
public java.lang.String getModelIdInput();
```

- *Type:* java.lang.String

---

##### `tenancyIdInput`<sup>Optional</sup> <a name="tenancyIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyIdInput"></a>

```java
public java.lang.String getTenancyIdInput();
```

- *Type:* java.lang.String

---

##### `featureType`<sup>Required</sup> <a name="featureType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureType"></a>

```java
public java.lang.String getFeatureType();
```

- *Type:* java.lang.String

---

##### `generateSearchablePdf`<sup>Required</sup> <a name="generateSearchablePdf" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdf"></a>

```java
public java.lang.Object getGenerateSearchablePdf();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxResults`<sup>Required</sup> <a name="maxResults" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResults"></a>

```java
public java.lang.Number getMaxResults();
```

- *Type:* java.lang.Number

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyId"></a>

```java
public java.lang.String getTenancyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>

---


### AiDocumentProcessorJobProcessorConfigOutputReference <a name="AiDocumentProcessorJobProcessorConfigOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_processor_job.AiDocumentProcessorJobProcessorConfigOutputReference;

new AiDocumentProcessorJobProcessorConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.putFeatures">putFeatures</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetDocumentType">resetDocumentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetIsZipOutputEnabled">resetIsZipOutputEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetLanguage">resetLanguage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFeatures` <a name="putFeatures" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.putFeatures"></a>

```java
public void putFeatures(IResolvable OR java.util.List<AiDocumentProcessorJobProcessorConfigFeatures> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.putFeatures.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>>

---

##### `resetDocumentType` <a name="resetDocumentType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetDocumentType"></a>

```java
public void resetDocumentType()
```

##### `resetIsZipOutputEnabled` <a name="resetIsZipOutputEnabled" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetIsZipOutputEnabled"></a>

```java
public void resetIsZipOutputEnabled()
```

##### `resetLanguage` <a name="resetLanguage" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.resetLanguage"></a>

```java
public void resetLanguage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.features">features</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList">AiDocumentProcessorJobProcessorConfigFeaturesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.documentTypeInput">documentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.featuresInput">featuresInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabledInput">isZipOutputEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.languageInput">languageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.processorTypeInput">processorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.documentType">documentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabled">isZipOutputEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.language">language</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.processorType">processorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `features`<sup>Required</sup> <a name="features" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.features"></a>

```java
public AiDocumentProcessorJobProcessorConfigFeaturesList getFeatures();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeaturesList">AiDocumentProcessorJobProcessorConfigFeaturesList</a>

---

##### `documentTypeInput`<sup>Optional</sup> <a name="documentTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.documentTypeInput"></a>

```java
public java.lang.String getDocumentTypeInput();
```

- *Type:* java.lang.String

---

##### `featuresInput`<sup>Optional</sup> <a name="featuresInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.featuresInput"></a>

```java
public java.lang.Object getFeaturesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigFeatures">AiDocumentProcessorJobProcessorConfigFeatures</a>>

---

##### `isZipOutputEnabledInput`<sup>Optional</sup> <a name="isZipOutputEnabledInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabledInput"></a>

```java
public java.lang.Object getIsZipOutputEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.languageInput"></a>

```java
public java.lang.String getLanguageInput();
```

- *Type:* java.lang.String

---

##### `processorTypeInput`<sup>Optional</sup> <a name="processorTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.processorTypeInput"></a>

```java
public java.lang.String getProcessorTypeInput();
```

- *Type:* java.lang.String

---

##### `documentType`<sup>Required</sup> <a name="documentType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.documentType"></a>

```java
public java.lang.String getDocumentType();
```

- *Type:* java.lang.String

---

##### `isZipOutputEnabled`<sup>Required</sup> <a name="isZipOutputEnabled" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabled"></a>

```java
public java.lang.Object getIsZipOutputEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `language`<sup>Required</sup> <a name="language" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

---

##### `processorType`<sup>Required</sup> <a name="processorType" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.processorType"></a>

```java
public java.lang.String getProcessorType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfigOutputReference.property.internalValue"></a>

```java
public AiDocumentProcessorJobProcessorConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobProcessorConfig">AiDocumentProcessorJobProcessorConfig</a>

---


### AiDocumentProcessorJobTimeoutsOutputReference <a name="AiDocumentProcessorJobTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_processor_job.AiDocumentProcessorJobTimeoutsOutputReference;

new AiDocumentProcessorJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiDocumentProcessorJob.AiDocumentProcessorJobTimeouts">AiDocumentProcessorJobTimeouts</a>

---



