# `aiAnomalyDetectionDetectAnomalyJob` Submodule <a name="`aiAnomalyDetectionDetectAnomalyJob` Submodule" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiAnomalyDetectionDetectAnomalyJob <a name="AiAnomalyDetectionDetectAnomalyJob" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job oci_ai_anomaly_detection_detect_anomaly_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_detect_anomaly_job.AiAnomalyDetectionDetectAnomalyJob;

AiAnomalyDetectionDetectAnomalyJob.Builder.create(Construct scope, java.lang.String id)
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
    .inputDetails(AiAnomalyDetectionDetectAnomalyJobInputDetails)
    .modelId(java.lang.String)
    .outputDetails(AiAnomalyDetectionDetectAnomalyJobOutputDetails)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .sensitivity(java.lang.Number)
//  .timeouts(AiAnomalyDetectionDetectAnomalyJobTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#compartment_id AiAnomalyDetectionDetectAnomalyJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.inputDetails">inputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a></code> | input_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.modelId">modelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#model_id AiAnomalyDetectionDetectAnomalyJob#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.outputDetails">outputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a></code> | output_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#description AiAnomalyDetectionDetectAnomalyJob#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#display_name AiAnomalyDetectionDetectAnomalyJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#id AiAnomalyDetectionDetectAnomalyJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.sensitivity">sensitivity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#sensitivity AiAnomalyDetectionDetectAnomalyJob#sensitivity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#compartment_id AiAnomalyDetectionDetectAnomalyJob#compartment_id}.

---

##### `inputDetails`<sup>Required</sup> <a name="inputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.inputDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a>

input_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#input_details AiAnomalyDetectionDetectAnomalyJob#input_details}

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.modelId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#model_id AiAnomalyDetectionDetectAnomalyJob#model_id}.

---

##### `outputDetails`<sup>Required</sup> <a name="outputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.outputDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a>

output_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#output_details AiAnomalyDetectionDetectAnomalyJob#output_details}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#description AiAnomalyDetectionDetectAnomalyJob#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#display_name AiAnomalyDetectionDetectAnomalyJob#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#id AiAnomalyDetectionDetectAnomalyJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sensitivity`<sup>Optional</sup> <a name="sensitivity" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.sensitivity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#sensitivity AiAnomalyDetectionDetectAnomalyJob#sensitivity}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#timeouts AiAnomalyDetectionDetectAnomalyJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putInputDetails">putInputDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putOutputDetails">putOutputDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetSensitivity">resetSensitivity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInputDetails` <a name="putInputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putInputDetails"></a>

```java
public void putInputDetails(AiAnomalyDetectionDetectAnomalyJobInputDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putInputDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a>

---

##### `putOutputDetails` <a name="putOutputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putOutputDetails"></a>

```java
public void putOutputDetails(AiAnomalyDetectionDetectAnomalyJobOutputDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putOutputDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putTimeouts"></a>

```java
public void putTimeouts(AiAnomalyDetectionDetectAnomalyJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetId"></a>

```java
public void resetId()
```

##### `resetSensitivity` <a name="resetSensitivity" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetSensitivity"></a>

```java
public void resetSensitivity()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AiAnomalyDetectionDetectAnomalyJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_detect_anomaly_job.AiAnomalyDetectionDetectAnomalyJob;

AiAnomalyDetectionDetectAnomalyJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_detect_anomaly_job.AiAnomalyDetectionDetectAnomalyJob;

AiAnomalyDetectionDetectAnomalyJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_detect_anomaly_job.AiAnomalyDetectionDetectAnomalyJob;

AiAnomalyDetectionDetectAnomalyJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_detect_anomaly_job.AiAnomalyDetectionDetectAnomalyJob;

AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AiAnomalyDetectionDetectAnomalyJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AiAnomalyDetectionDetectAnomalyJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AiAnomalyDetectionDetectAnomalyJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AiAnomalyDetectionDetectAnomalyJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.inputDetails">inputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference">AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.lifecycleStateDetails">lifecycleStateDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.outputDetails">outputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference">AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeAccepted">timeAccepted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeFinished">timeFinished</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference">AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.inputDetailsInput">inputDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.modelIdInput">modelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.outputDetailsInput">outputDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.sensitivityInput">sensitivityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.modelId">modelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.sensitivity">sensitivity</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `inputDetails`<sup>Required</sup> <a name="inputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.inputDetails"></a>

```java
public AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference getInputDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference">AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference</a>

---

##### `lifecycleStateDetails`<sup>Required</sup> <a name="lifecycleStateDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.lifecycleStateDetails"></a>

```java
public java.lang.String getLifecycleStateDetails();
```

- *Type:* java.lang.String

---

##### `outputDetails`<sup>Required</sup> <a name="outputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.outputDetails"></a>

```java
public AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference getOutputDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference">AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeAccepted`<sup>Required</sup> <a name="timeAccepted" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeAccepted"></a>

```java
public java.lang.String getTimeAccepted();
```

- *Type:* java.lang.String

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeFinished"></a>

```java
public java.lang.String getTimeFinished();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeouts"></a>

```java
public AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference">AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference</a>

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputDetailsInput`<sup>Optional</sup> <a name="inputDetailsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.inputDetailsInput"></a>

```java
public AiAnomalyDetectionDetectAnomalyJobInputDetails getInputDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a>

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.modelIdInput"></a>

```java
public java.lang.String getModelIdInput();
```

- *Type:* java.lang.String

---

##### `outputDetailsInput`<sup>Optional</sup> <a name="outputDetailsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.outputDetailsInput"></a>

```java
public AiAnomalyDetectionDetectAnomalyJobOutputDetails getOutputDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a>

---

##### `sensitivityInput`<sup>Optional</sup> <a name="sensitivityInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.sensitivityInput"></a>

```java
public java.lang.Number getSensitivityInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

---

##### `sensitivity`<sup>Required</sup> <a name="sensitivity" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.sensitivity"></a>

```java
public java.lang.Number getSensitivity();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AiAnomalyDetectionDetectAnomalyJobConfig <a name="AiAnomalyDetectionDetectAnomalyJobConfig" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_detect_anomaly_job.AiAnomalyDetectionDetectAnomalyJobConfig;

AiAnomalyDetectionDetectAnomalyJobConfig.builder()
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
    .inputDetails(AiAnomalyDetectionDetectAnomalyJobInputDetails)
    .modelId(java.lang.String)
    .outputDetails(AiAnomalyDetectionDetectAnomalyJobOutputDetails)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .sensitivity(java.lang.Number)
//  .timeouts(AiAnomalyDetectionDetectAnomalyJobTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#compartment_id AiAnomalyDetectionDetectAnomalyJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.inputDetails">inputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a></code> | input_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.modelId">modelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#model_id AiAnomalyDetectionDetectAnomalyJob#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.outputDetails">outputDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a></code> | output_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#description AiAnomalyDetectionDetectAnomalyJob#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#display_name AiAnomalyDetectionDetectAnomalyJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#id AiAnomalyDetectionDetectAnomalyJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.sensitivity">sensitivity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#sensitivity AiAnomalyDetectionDetectAnomalyJob#sensitivity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#compartment_id AiAnomalyDetectionDetectAnomalyJob#compartment_id}.

---

##### `inputDetails`<sup>Required</sup> <a name="inputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.inputDetails"></a>

```java
public AiAnomalyDetectionDetectAnomalyJobInputDetails getInputDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a>

input_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#input_details AiAnomalyDetectionDetectAnomalyJob#input_details}

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#model_id AiAnomalyDetectionDetectAnomalyJob#model_id}.

---

##### `outputDetails`<sup>Required</sup> <a name="outputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.outputDetails"></a>

```java
public AiAnomalyDetectionDetectAnomalyJobOutputDetails getOutputDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a>

output_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#output_details AiAnomalyDetectionDetectAnomalyJob#output_details}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#description AiAnomalyDetectionDetectAnomalyJob#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#display_name AiAnomalyDetectionDetectAnomalyJob#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#id AiAnomalyDetectionDetectAnomalyJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sensitivity`<sup>Optional</sup> <a name="sensitivity" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.sensitivity"></a>

```java
public java.lang.Number getSensitivity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#sensitivity AiAnomalyDetectionDetectAnomalyJob#sensitivity}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.timeouts"></a>

```java
public AiAnomalyDetectionDetectAnomalyJobTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#timeouts AiAnomalyDetectionDetectAnomalyJob#timeouts}

---

### AiAnomalyDetectionDetectAnomalyJobInputDetails <a name="AiAnomalyDetectionDetectAnomalyJobInputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_detect_anomaly_job.AiAnomalyDetectionDetectAnomalyJobInputDetails;

AiAnomalyDetectionDetectAnomalyJobInputDetails.builder()
    .inputType(java.lang.String)
//  .content(java.lang.String)
//  .contentType(java.lang.String)
//  .data(IResolvable)
//  .data(java.util.List<AiAnomalyDetectionDetectAnomalyJobInputDetailsData>)
//  .objectLocations(IResolvable)
//  .objectLocations(java.util.List<AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations>)
//  .signalNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.inputType">inputType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#input_type AiAnomalyDetectionDetectAnomalyJob#input_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#content AiAnomalyDetectionDetectAnomalyJob#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#content_type AiAnomalyDetectionDetectAnomalyJob#content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.data">data</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData">AiAnomalyDetectionDetectAnomalyJobInputDetailsData</a>></code> | data block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.objectLocations">objectLocations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a>></code> | object_locations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.signalNames">signalNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#signal_names AiAnomalyDetectionDetectAnomalyJob#signal_names}. |

---

##### `inputType`<sup>Required</sup> <a name="inputType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.inputType"></a>

```java
public java.lang.String getInputType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#input_type AiAnomalyDetectionDetectAnomalyJob#input_type}.

---

##### `content`<sup>Optional</sup> <a name="content" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#content AiAnomalyDetectionDetectAnomalyJob#content}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#content_type AiAnomalyDetectionDetectAnomalyJob#content_type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.data"></a>

```java
public java.lang.Object getData();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData">AiAnomalyDetectionDetectAnomalyJobInputDetailsData</a>>

data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#data AiAnomalyDetectionDetectAnomalyJob#data}

---

##### `objectLocations`<sup>Optional</sup> <a name="objectLocations" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.objectLocations"></a>

```java
public java.lang.Object getObjectLocations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a>>

object_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#object_locations AiAnomalyDetectionDetectAnomalyJob#object_locations}

---

##### `signalNames`<sup>Optional</sup> <a name="signalNames" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.signalNames"></a>

```java
public java.util.List<java.lang.String> getSignalNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#signal_names AiAnomalyDetectionDetectAnomalyJob#signal_names}.

---

### AiAnomalyDetectionDetectAnomalyJobInputDetailsData <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsData" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_detect_anomaly_job.AiAnomalyDetectionDetectAnomalyJobInputDetailsData;

AiAnomalyDetectionDetectAnomalyJobInputDetailsData.builder()
//  .timestamp(java.lang.String)
//  .values(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#timestamp AiAnomalyDetectionDetectAnomalyJob#timestamp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#values AiAnomalyDetectionDetectAnomalyJob#values}. |

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#timestamp AiAnomalyDetectionDetectAnomalyJob#timestamp}.

---

##### `values`<sup>Optional</sup> <a name="values" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#values AiAnomalyDetectionDetectAnomalyJob#values}.

---

### AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_detect_anomaly_job.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations;

AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.builder()
//  .bucket(java.lang.String)
//  .namespace(java.lang.String)
//  .object(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#bucket AiAnomalyDetectionDetectAnomalyJob#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#namespace AiAnomalyDetectionDetectAnomalyJob#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.object">object</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#object AiAnomalyDetectionDetectAnomalyJob#object}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#bucket AiAnomalyDetectionDetectAnomalyJob#bucket}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#namespace AiAnomalyDetectionDetectAnomalyJob#namespace}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#object AiAnomalyDetectionDetectAnomalyJob#object}.

---

### AiAnomalyDetectionDetectAnomalyJobOutputDetails <a name="AiAnomalyDetectionDetectAnomalyJobOutputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_detect_anomaly_job.AiAnomalyDetectionDetectAnomalyJobOutputDetails;

AiAnomalyDetectionDetectAnomalyJobOutputDetails.builder()
    .bucket(java.lang.String)
    .namespace(java.lang.String)
    .outputType(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#bucket AiAnomalyDetectionDetectAnomalyJob#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#namespace AiAnomalyDetectionDetectAnomalyJob#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.outputType">outputType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#output_type AiAnomalyDetectionDetectAnomalyJob#output_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#prefix AiAnomalyDetectionDetectAnomalyJob#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#bucket AiAnomalyDetectionDetectAnomalyJob#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#namespace AiAnomalyDetectionDetectAnomalyJob#namespace}.

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.outputType"></a>

```java
public java.lang.String getOutputType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#output_type AiAnomalyDetectionDetectAnomalyJob#output_type}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#prefix AiAnomalyDetectionDetectAnomalyJob#prefix}.

---

### AiAnomalyDetectionDetectAnomalyJobTimeouts <a name="AiAnomalyDetectionDetectAnomalyJobTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_detect_anomaly_job.AiAnomalyDetectionDetectAnomalyJobTimeouts;

AiAnomalyDetectionDetectAnomalyJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#create AiAnomalyDetectionDetectAnomalyJob#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#delete AiAnomalyDetectionDetectAnomalyJob#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#update AiAnomalyDetectionDetectAnomalyJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#create AiAnomalyDetectionDetectAnomalyJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#delete AiAnomalyDetectionDetectAnomalyJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#update AiAnomalyDetectionDetectAnomalyJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_detect_anomaly_job.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList;

new AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.get"></a>

```java
public AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData">AiAnomalyDetectionDetectAnomalyJobInputDetailsData</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData">AiAnomalyDetectionDetectAnomalyJobInputDetailsData</a>>

---


### AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_detect_anomaly_job.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference;

new AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resetTimestamp">resetTimestamp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimestamp` <a name="resetTimestamp" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resetTimestamp"></a>

```java
public void resetTimestamp()
```

##### `resetValues` <a name="resetValues" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.timestampInput">timestampInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData">AiAnomalyDetectionDetectAnomalyJobInputDetailsData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timestampInput`<sup>Optional</sup> <a name="timestampInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.timestampInput"></a>

```java
public java.lang.String getTimestampInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.Number> getValuesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData">AiAnomalyDetectionDetectAnomalyJobInputDetailsData</a>

---


### AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_detect_anomaly_job.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList;

new AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.get"></a>

```java
public AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a>>

---


### AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_detect_anomaly_job.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference;

new AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetObject">resetObject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetObject` <a name="resetObject" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetObject"></a>

```java
public void resetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.objectInput">objectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.objectInput"></a>

```java
public java.lang.String getObjectInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a>

---


### AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_detect_anomaly_job.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference;

new AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putData">putData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putObjectLocations">putObjectLocations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetObjectLocations">resetObjectLocations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetSignalNames">resetSignalNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putData` <a name="putData" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putData"></a>

```java
public void putData(IResolvable OR java.util.List<AiAnomalyDetectionDetectAnomalyJobInputDetailsData> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putData.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData">AiAnomalyDetectionDetectAnomalyJobInputDetailsData</a>>

---

##### `putObjectLocations` <a name="putObjectLocations" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putObjectLocations"></a>

```java
public void putObjectLocations(IResolvable OR java.util.List<AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putObjectLocations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a>>

---

##### `resetContent` <a name="resetContent" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetContent"></a>

```java
public void resetContent()
```

##### `resetContentType` <a name="resetContentType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetData` <a name="resetData" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetData"></a>

```java
public void resetData()
```

##### `resetObjectLocations` <a name="resetObjectLocations" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetObjectLocations"></a>

```java
public void resetObjectLocations()
```

##### `resetSignalNames` <a name="resetSignalNames" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetSignalNames"></a>

```java
public void resetSignalNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.data">data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList">AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.objectLocations">objectLocations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.dataInput">dataInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData">AiAnomalyDetectionDetectAnomalyJobInputDetailsData</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.inputTypeInput">inputTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.objectLocationsInput">objectLocationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.signalNamesInput">signalNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.inputType">inputType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.signalNames">signalNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.data"></a>

```java
public AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList getData();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList">AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `objectLocations`<sup>Required</sup> <a name="objectLocations" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.objectLocations"></a>

```java
public AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList getObjectLocations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList</a>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.dataInput"></a>

```java
public java.lang.Object getDataInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData">AiAnomalyDetectionDetectAnomalyJobInputDetailsData</a>>

---

##### `inputTypeInput`<sup>Optional</sup> <a name="inputTypeInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.inputTypeInput"></a>

```java
public java.lang.String getInputTypeInput();
```

- *Type:* java.lang.String

---

##### `objectLocationsInput`<sup>Optional</sup> <a name="objectLocationsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.objectLocationsInput"></a>

```java
public java.lang.Object getObjectLocationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a>>

---

##### `signalNamesInput`<sup>Optional</sup> <a name="signalNamesInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.signalNamesInput"></a>

```java
public java.util.List<java.lang.String> getSignalNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `inputType`<sup>Required</sup> <a name="inputType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.inputType"></a>

```java
public java.lang.String getInputType();
```

- *Type:* java.lang.String

---

##### `signalNames`<sup>Required</sup> <a name="signalNames" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.signalNames"></a>

```java
public java.util.List<java.lang.String> getSignalNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.internalValue"></a>

```java
public AiAnomalyDetectionDetectAnomalyJobInputDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a>

---


### AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference <a name="AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_detect_anomaly_job.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference;

new AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.outputTypeInput">outputTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.outputType">outputType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `outputTypeInput`<sup>Optional</sup> <a name="outputTypeInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.outputTypeInput"></a>

```java
public java.lang.String getOutputTypeInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.outputType"></a>

```java
public java.lang.String getOutputType();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.internalValue"></a>

```java
public AiAnomalyDetectionDetectAnomalyJobOutputDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a>

---


### AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference <a name="AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_detect_anomaly_job.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference;

new AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a>

---



