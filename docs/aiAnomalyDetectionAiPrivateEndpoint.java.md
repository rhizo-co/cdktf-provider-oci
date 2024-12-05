# `aiAnomalyDetectionAiPrivateEndpoint` Submodule <a name="`aiAnomalyDetectionAiPrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiAnomalyDetectionAiPrivateEndpoint <a name="AiAnomalyDetectionAiPrivateEndpoint" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint oci_ai_anomaly_detection_ai_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_ai_private_endpoint.AiAnomalyDetectionAiPrivateEndpoint;

AiAnomalyDetectionAiPrivateEndpoint.Builder.create(Construct scope, java.lang.String id)
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
    .dnsZones(java.util.List<java.lang.String>)
    .subnetId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(AiAnomalyDetectionAiPrivateEndpointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#compartment_id AiAnomalyDetectionAiPrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.dnsZones">dnsZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#dns_zones AiAnomalyDetectionAiPrivateEndpoint#dns_zones}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#subnet_id AiAnomalyDetectionAiPrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#defined_tags AiAnomalyDetectionAiPrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#display_name AiAnomalyDetectionAiPrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#freeform_tags AiAnomalyDetectionAiPrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#id AiAnomalyDetectionAiPrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeouts">AiAnomalyDetectionAiPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#compartment_id AiAnomalyDetectionAiPrivateEndpoint#compartment_id}.

---

##### `dnsZones`<sup>Required</sup> <a name="dnsZones" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.dnsZones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#dns_zones AiAnomalyDetectionAiPrivateEndpoint#dns_zones}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#subnet_id AiAnomalyDetectionAiPrivateEndpoint#subnet_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#defined_tags AiAnomalyDetectionAiPrivateEndpoint#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#display_name AiAnomalyDetectionAiPrivateEndpoint#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#freeform_tags AiAnomalyDetectionAiPrivateEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#id AiAnomalyDetectionAiPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeouts">AiAnomalyDetectionAiPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#timeouts AiAnomalyDetectionAiPrivateEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.putTimeouts"></a>

```java
public void putTimeouts(AiAnomalyDetectionAiPrivateEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeouts">AiAnomalyDetectionAiPrivateEndpointTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AiAnomalyDetectionAiPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_ai_private_endpoint.AiAnomalyDetectionAiPrivateEndpoint;

AiAnomalyDetectionAiPrivateEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_ai_private_endpoint.AiAnomalyDetectionAiPrivateEndpoint;

AiAnomalyDetectionAiPrivateEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_ai_private_endpoint.AiAnomalyDetectionAiPrivateEndpoint;

AiAnomalyDetectionAiPrivateEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_ai_private_endpoint.AiAnomalyDetectionAiPrivateEndpoint;

AiAnomalyDetectionAiPrivateEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AiAnomalyDetectionAiPrivateEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AiAnomalyDetectionAiPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AiAnomalyDetectionAiPrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AiAnomalyDetectionAiPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AiAnomalyDetectionAiPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.attachedDataAssets">attachedDataAssets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference">AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.dnsZonesInput">dnsZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeouts">AiAnomalyDetectionAiPrivateEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.dnsZones">dnsZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attachedDataAssets`<sup>Required</sup> <a name="attachedDataAssets" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.attachedDataAssets"></a>

```java
public java.util.List<java.lang.String> getAttachedDataAssets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.timeouts"></a>

```java
public AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference">AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `dnsZonesInput`<sup>Optional</sup> <a name="dnsZonesInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.dnsZonesInput"></a>

```java
public java.util.List<java.lang.String> getDnsZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeouts">AiAnomalyDetectionAiPrivateEndpointTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `dnsZones`<sup>Required</sup> <a name="dnsZones" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.dnsZones"></a>

```java
public java.util.List<java.lang.String> getDnsZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AiAnomalyDetectionAiPrivateEndpointConfig <a name="AiAnomalyDetectionAiPrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_ai_private_endpoint.AiAnomalyDetectionAiPrivateEndpointConfig;

AiAnomalyDetectionAiPrivateEndpointConfig.builder()
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
    .dnsZones(java.util.List<java.lang.String>)
    .subnetId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(AiAnomalyDetectionAiPrivateEndpointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#compartment_id AiAnomalyDetectionAiPrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.dnsZones">dnsZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#dns_zones AiAnomalyDetectionAiPrivateEndpoint#dns_zones}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#subnet_id AiAnomalyDetectionAiPrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#defined_tags AiAnomalyDetectionAiPrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#display_name AiAnomalyDetectionAiPrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#freeform_tags AiAnomalyDetectionAiPrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#id AiAnomalyDetectionAiPrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeouts">AiAnomalyDetectionAiPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#compartment_id AiAnomalyDetectionAiPrivateEndpoint#compartment_id}.

---

##### `dnsZones`<sup>Required</sup> <a name="dnsZones" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.dnsZones"></a>

```java
public java.util.List<java.lang.String> getDnsZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#dns_zones AiAnomalyDetectionAiPrivateEndpoint#dns_zones}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#subnet_id AiAnomalyDetectionAiPrivateEndpoint#subnet_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#defined_tags AiAnomalyDetectionAiPrivateEndpoint#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#display_name AiAnomalyDetectionAiPrivateEndpoint#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#freeform_tags AiAnomalyDetectionAiPrivateEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#id AiAnomalyDetectionAiPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointConfig.property.timeouts"></a>

```java
public AiAnomalyDetectionAiPrivateEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeouts">AiAnomalyDetectionAiPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#timeouts AiAnomalyDetectionAiPrivateEndpoint#timeouts}

---

### AiAnomalyDetectionAiPrivateEndpointTimeouts <a name="AiAnomalyDetectionAiPrivateEndpointTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_ai_private_endpoint.AiAnomalyDetectionAiPrivateEndpointTimeouts;

AiAnomalyDetectionAiPrivateEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#create AiAnomalyDetectionAiPrivateEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#delete AiAnomalyDetectionAiPrivateEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#update AiAnomalyDetectionAiPrivateEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#create AiAnomalyDetectionAiPrivateEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#delete AiAnomalyDetectionAiPrivateEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_ai_private_endpoint#update AiAnomalyDetectionAiPrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference <a name="AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_anomaly_detection_ai_private_endpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference;

new AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeouts">AiAnomalyDetectionAiPrivateEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionAiPrivateEndpoint.AiAnomalyDetectionAiPrivateEndpointTimeouts">AiAnomalyDetectionAiPrivateEndpointTimeouts</a>

---



