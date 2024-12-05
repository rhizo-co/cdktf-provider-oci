# `integrationIntegrationInstance` Submodule <a name="`integrationIntegrationInstance` Submodule" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationIntegrationInstance <a name="IntegrationIntegrationInstance" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance oci_integration_integration_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstance;

IntegrationIntegrationInstance.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .integrationInstanceType(java.lang.String)
    .isByol(java.lang.Boolean)
    .isByol(IResolvable)
    .messagePacks(java.lang.Number)
//  .alternateCustomEndpoints(IResolvable)
//  .alternateCustomEndpoints(java.util.List<IntegrationIntegrationInstanceAlternateCustomEndpoints>)
//  .consumptionModel(java.lang.String)
//  .customEndpoint(IntegrationIntegrationInstanceCustomEndpoint)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .domainId(java.lang.String)
//  .enableProcessAutomationTrigger(java.lang.Number)
//  .extendDataRetentionTrigger(java.lang.Number)
//  .failoverTrigger(java.lang.Number)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .idcsAt(java.lang.String)
//  .isDisasterRecoveryEnabled(java.lang.Boolean)
//  .isDisasterRecoveryEnabled(IResolvable)
//  .isFileServerEnabled(java.lang.Boolean)
//  .isFileServerEnabled(IResolvable)
//  .isVisualBuilderEnabled(java.lang.Boolean)
//  .isVisualBuilderEnabled(IResolvable)
//  .networkEndpointDetails(IntegrationIntegrationInstanceNetworkEndpointDetails)
//  .shape(java.lang.String)
//  .state(java.lang.String)
//  .timeouts(IntegrationIntegrationInstanceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#compartment_id IntegrationIntegrationInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#display_name IntegrationIntegrationInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.integrationInstanceType">integrationInstanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#integration_instance_type IntegrationIntegrationInstance#integration_instance_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.isByol">isByol</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_byol IntegrationIntegrationInstance#is_byol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.messagePacks">messagePacks</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#message_packs IntegrationIntegrationInstance#message_packs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.alternateCustomEndpoints">alternateCustomEndpoints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints">IntegrationIntegrationInstanceAlternateCustomEndpoints</a>></code> | alternate_custom_endpoints block. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.consumptionModel">consumptionModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#consumption_model IntegrationIntegrationInstance#consumption_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.customEndpoint">customEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a></code> | custom_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#defined_tags IntegrationIntegrationInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.domainId">domainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#domain_id IntegrationIntegrationInstance#domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.enableProcessAutomationTrigger">enableProcessAutomationTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#enable_process_automation_trigger IntegrationIntegrationInstance#enable_process_automation_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.extendDataRetentionTrigger">extendDataRetentionTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#extend_data_retention_trigger IntegrationIntegrationInstance#extend_data_retention_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.failoverTrigger">failoverTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#failover_trigger IntegrationIntegrationInstance#failover_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#freeform_tags IntegrationIntegrationInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#id IntegrationIntegrationInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.idcsAt">idcsAt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#idcs_at IntegrationIntegrationInstance#idcs_at}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.isDisasterRecoveryEnabled">isDisasterRecoveryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_disaster_recovery_enabled IntegrationIntegrationInstance#is_disaster_recovery_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.isFileServerEnabled">isFileServerEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_file_server_enabled IntegrationIntegrationInstance#is_file_server_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.isVisualBuilderEnabled">isVisualBuilderEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_visual_builder_enabled IntegrationIntegrationInstance#is_visual_builder_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.networkEndpointDetails">networkEndpointDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a></code> | network_endpoint_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#shape IntegrationIntegrationInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#state IntegrationIntegrationInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts">IntegrationIntegrationInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#compartment_id IntegrationIntegrationInstance#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#display_name IntegrationIntegrationInstance#display_name}.

---

##### `integrationInstanceType`<sup>Required</sup> <a name="integrationInstanceType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.integrationInstanceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#integration_instance_type IntegrationIntegrationInstance#integration_instance_type}.

---

##### `isByol`<sup>Required</sup> <a name="isByol" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.isByol"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_byol IntegrationIntegrationInstance#is_byol}.

---

##### `messagePacks`<sup>Required</sup> <a name="messagePacks" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.messagePacks"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#message_packs IntegrationIntegrationInstance#message_packs}.

---

##### `alternateCustomEndpoints`<sup>Optional</sup> <a name="alternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.alternateCustomEndpoints"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints">IntegrationIntegrationInstanceAlternateCustomEndpoints</a>>

alternate_custom_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#alternate_custom_endpoints IntegrationIntegrationInstance#alternate_custom_endpoints}

---

##### `consumptionModel`<sup>Optional</sup> <a name="consumptionModel" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.consumptionModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#consumption_model IntegrationIntegrationInstance#consumption_model}.

---

##### `customEndpoint`<sup>Optional</sup> <a name="customEndpoint" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.customEndpoint"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a>

custom_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#custom_endpoint IntegrationIntegrationInstance#custom_endpoint}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#defined_tags IntegrationIntegrationInstance#defined_tags}.

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.domainId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#domain_id IntegrationIntegrationInstance#domain_id}.

---

##### `enableProcessAutomationTrigger`<sup>Optional</sup> <a name="enableProcessAutomationTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.enableProcessAutomationTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#enable_process_automation_trigger IntegrationIntegrationInstance#enable_process_automation_trigger}.

---

##### `extendDataRetentionTrigger`<sup>Optional</sup> <a name="extendDataRetentionTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.extendDataRetentionTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#extend_data_retention_trigger IntegrationIntegrationInstance#extend_data_retention_trigger}.

---

##### `failoverTrigger`<sup>Optional</sup> <a name="failoverTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.failoverTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#failover_trigger IntegrationIntegrationInstance#failover_trigger}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#freeform_tags IntegrationIntegrationInstance#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#id IntegrationIntegrationInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idcsAt`<sup>Optional</sup> <a name="idcsAt" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.idcsAt"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#idcs_at IntegrationIntegrationInstance#idcs_at}.

---

##### `isDisasterRecoveryEnabled`<sup>Optional</sup> <a name="isDisasterRecoveryEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.isDisasterRecoveryEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_disaster_recovery_enabled IntegrationIntegrationInstance#is_disaster_recovery_enabled}.

---

##### `isFileServerEnabled`<sup>Optional</sup> <a name="isFileServerEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.isFileServerEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_file_server_enabled IntegrationIntegrationInstance#is_file_server_enabled}.

---

##### `isVisualBuilderEnabled`<sup>Optional</sup> <a name="isVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.isVisualBuilderEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_visual_builder_enabled IntegrationIntegrationInstance#is_visual_builder_enabled}.

---

##### `networkEndpointDetails`<sup>Optional</sup> <a name="networkEndpointDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.networkEndpointDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a>

network_endpoint_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#network_endpoint_details IntegrationIntegrationInstance#network_endpoint_details}

---

##### `shape`<sup>Optional</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.shape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#shape IntegrationIntegrationInstance#shape}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#state IntegrationIntegrationInstance#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts">IntegrationIntegrationInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#timeouts IntegrationIntegrationInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putAlternateCustomEndpoints">putAlternateCustomEndpoints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putCustomEndpoint">putCustomEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putNetworkEndpointDetails">putNetworkEndpointDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetAlternateCustomEndpoints">resetAlternateCustomEndpoints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetConsumptionModel">resetConsumptionModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetCustomEndpoint">resetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetDomainId">resetDomainId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetEnableProcessAutomationTrigger">resetEnableProcessAutomationTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetExtendDataRetentionTrigger">resetExtendDataRetentionTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetFailoverTrigger">resetFailoverTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIdcsAt">resetIdcsAt</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIsDisasterRecoveryEnabled">resetIsDisasterRecoveryEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIsFileServerEnabled">resetIsFileServerEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIsVisualBuilderEnabled">resetIsVisualBuilderEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetNetworkEndpointDetails">resetNetworkEndpointDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetShape">resetShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlternateCustomEndpoints` <a name="putAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putAlternateCustomEndpoints"></a>

```java
public void putAlternateCustomEndpoints(IResolvable OR java.util.List<IntegrationIntegrationInstanceAlternateCustomEndpoints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putAlternateCustomEndpoints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints">IntegrationIntegrationInstanceAlternateCustomEndpoints</a>>

---

##### `putCustomEndpoint` <a name="putCustomEndpoint" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putCustomEndpoint"></a>

```java
public void putCustomEndpoint(IntegrationIntegrationInstanceCustomEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putCustomEndpoint.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a>

---

##### `putNetworkEndpointDetails` <a name="putNetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putNetworkEndpointDetails"></a>

```java
public void putNetworkEndpointDetails(IntegrationIntegrationInstanceNetworkEndpointDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putNetworkEndpointDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putTimeouts"></a>

```java
public void putTimeouts(IntegrationIntegrationInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts">IntegrationIntegrationInstanceTimeouts</a>

---

##### `resetAlternateCustomEndpoints` <a name="resetAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetAlternateCustomEndpoints"></a>

```java
public void resetAlternateCustomEndpoints()
```

##### `resetConsumptionModel` <a name="resetConsumptionModel" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetConsumptionModel"></a>

```java
public void resetConsumptionModel()
```

##### `resetCustomEndpoint` <a name="resetCustomEndpoint" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetCustomEndpoint"></a>

```java
public void resetCustomEndpoint()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDomainId` <a name="resetDomainId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetDomainId"></a>

```java
public void resetDomainId()
```

##### `resetEnableProcessAutomationTrigger` <a name="resetEnableProcessAutomationTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetEnableProcessAutomationTrigger"></a>

```java
public void resetEnableProcessAutomationTrigger()
```

##### `resetExtendDataRetentionTrigger` <a name="resetExtendDataRetentionTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetExtendDataRetentionTrigger"></a>

```java
public void resetExtendDataRetentionTrigger()
```

##### `resetFailoverTrigger` <a name="resetFailoverTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetFailoverTrigger"></a>

```java
public void resetFailoverTrigger()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetId"></a>

```java
public void resetId()
```

##### `resetIdcsAt` <a name="resetIdcsAt" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIdcsAt"></a>

```java
public void resetIdcsAt()
```

##### `resetIsDisasterRecoveryEnabled` <a name="resetIsDisasterRecoveryEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIsDisasterRecoveryEnabled"></a>

```java
public void resetIsDisasterRecoveryEnabled()
```

##### `resetIsFileServerEnabled` <a name="resetIsFileServerEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIsFileServerEnabled"></a>

```java
public void resetIsFileServerEnabled()
```

##### `resetIsVisualBuilderEnabled` <a name="resetIsVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetIsVisualBuilderEnabled"></a>

```java
public void resetIsVisualBuilderEnabled()
```

##### `resetNetworkEndpointDetails` <a name="resetNetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetNetworkEndpointDetails"></a>

```java
public void resetNetworkEndpointDetails()
```

##### `resetShape` <a name="resetShape" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetShape"></a>

```java
public void resetShape()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetState"></a>

```java
public void resetState()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationIntegrationInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstance;

IntegrationIntegrationInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstance;

IntegrationIntegrationInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstance;

IntegrationIntegrationInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstance;

IntegrationIntegrationInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationIntegrationInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationIntegrationInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationIntegrationInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationIntegrationInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationIntegrationInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.alternateCustomEndpoints">alternateCustomEndpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList">IntegrationIntegrationInstanceAlternateCustomEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.attachments">attachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList">IntegrationIntegrationInstanceAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.customEndpoint">customEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference">IntegrationIntegrationInstanceCustomEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.dataRetentionPeriod">dataRetentionPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.disasterRecoveryDetails">disasterRecoveryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList">IntegrationIntegrationInstanceDisasterRecoveryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idcsInfo">idcsInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList">IntegrationIntegrationInstanceIdcsInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.instanceDesignTimeUrl">instanceDesignTimeUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.instanceUrl">instanceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.networkEndpointDetails">networkEndpointDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference">IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.privateEndpointOutboundConnection">privateEndpointOutboundConnection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList">IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference">IntegrationIntegrationInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.alternateCustomEndpointsInput">alternateCustomEndpointsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints">IntegrationIntegrationInstanceAlternateCustomEndpoints</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.consumptionModelInput">consumptionModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.customEndpointInput">customEndpointInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.domainIdInput">domainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.enableProcessAutomationTriggerInput">enableProcessAutomationTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.extendDataRetentionTriggerInput">extendDataRetentionTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.failoverTriggerInput">failoverTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idcsAtInput">idcsAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.integrationInstanceTypeInput">integrationInstanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isByolInput">isByolInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isDisasterRecoveryEnabledInput">isDisasterRecoveryEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isFileServerEnabledInput">isFileServerEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isVisualBuilderEnabledInput">isVisualBuilderEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.messagePacksInput">messagePacksInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.networkEndpointDetailsInput">networkEndpointDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts">IntegrationIntegrationInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.consumptionModel">consumptionModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.enableProcessAutomationTrigger">enableProcessAutomationTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.extendDataRetentionTrigger">extendDataRetentionTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.failoverTrigger">failoverTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idcsAt">idcsAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.integrationInstanceType">integrationInstanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isByol">isByol</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isDisasterRecoveryEnabled">isDisasterRecoveryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isFileServerEnabled">isFileServerEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isVisualBuilderEnabled">isVisualBuilderEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.messagePacks">messagePacks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alternateCustomEndpoints`<sup>Required</sup> <a name="alternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.alternateCustomEndpoints"></a>

```java
public IntegrationIntegrationInstanceAlternateCustomEndpointsList getAlternateCustomEndpoints();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList">IntegrationIntegrationInstanceAlternateCustomEndpointsList</a>

---

##### `attachments`<sup>Required</sup> <a name="attachments" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.attachments"></a>

```java
public IntegrationIntegrationInstanceAttachmentsList getAttachments();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList">IntegrationIntegrationInstanceAttachmentsList</a>

---

##### `customEndpoint`<sup>Required</sup> <a name="customEndpoint" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.customEndpoint"></a>

```java
public IntegrationIntegrationInstanceCustomEndpointOutputReference getCustomEndpoint();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference">IntegrationIntegrationInstanceCustomEndpointOutputReference</a>

---

##### `dataRetentionPeriod`<sup>Required</sup> <a name="dataRetentionPeriod" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.dataRetentionPeriod"></a>

```java
public java.lang.String getDataRetentionPeriod();
```

- *Type:* java.lang.String

---

##### `disasterRecoveryDetails`<sup>Required</sup> <a name="disasterRecoveryDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.disasterRecoveryDetails"></a>

```java
public IntegrationIntegrationInstanceDisasterRecoveryDetailsList getDisasterRecoveryDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList">IntegrationIntegrationInstanceDisasterRecoveryDetailsList</a>

---

##### `idcsInfo`<sup>Required</sup> <a name="idcsInfo" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idcsInfo"></a>

```java
public IntegrationIntegrationInstanceIdcsInfoList getIdcsInfo();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList">IntegrationIntegrationInstanceIdcsInfoList</a>

---

##### `instanceDesignTimeUrl`<sup>Required</sup> <a name="instanceDesignTimeUrl" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.instanceDesignTimeUrl"></a>

```java
public java.lang.String getInstanceDesignTimeUrl();
```

- *Type:* java.lang.String

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.instanceUrl"></a>

```java
public java.lang.String getInstanceUrl();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `networkEndpointDetails`<sup>Required</sup> <a name="networkEndpointDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.networkEndpointDetails"></a>

```java
public IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference getNetworkEndpointDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference">IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference</a>

---

##### `privateEndpointOutboundConnection`<sup>Required</sup> <a name="privateEndpointOutboundConnection" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.privateEndpointOutboundConnection"></a>

```java
public IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList getPrivateEndpointOutboundConnection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList">IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList</a>

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeouts"></a>

```java
public IntegrationIntegrationInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference">IntegrationIntegrationInstanceTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `alternateCustomEndpointsInput`<sup>Optional</sup> <a name="alternateCustomEndpointsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.alternateCustomEndpointsInput"></a>

```java
public java.lang.Object getAlternateCustomEndpointsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints">IntegrationIntegrationInstanceAlternateCustomEndpoints</a>>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `consumptionModelInput`<sup>Optional</sup> <a name="consumptionModelInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.consumptionModelInput"></a>

```java
public java.lang.String getConsumptionModelInput();
```

- *Type:* java.lang.String

---

##### `customEndpointInput`<sup>Optional</sup> <a name="customEndpointInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.customEndpointInput"></a>

```java
public IntegrationIntegrationInstanceCustomEndpoint getCustomEndpointInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.domainIdInput"></a>

```java
public java.lang.String getDomainIdInput();
```

- *Type:* java.lang.String

---

##### `enableProcessAutomationTriggerInput`<sup>Optional</sup> <a name="enableProcessAutomationTriggerInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.enableProcessAutomationTriggerInput"></a>

```java
public java.lang.Number getEnableProcessAutomationTriggerInput();
```

- *Type:* java.lang.Number

---

##### `extendDataRetentionTriggerInput`<sup>Optional</sup> <a name="extendDataRetentionTriggerInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.extendDataRetentionTriggerInput"></a>

```java
public java.lang.Number getExtendDataRetentionTriggerInput();
```

- *Type:* java.lang.Number

---

##### `failoverTriggerInput`<sup>Optional</sup> <a name="failoverTriggerInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.failoverTriggerInput"></a>

```java
public java.lang.Number getFailoverTriggerInput();
```

- *Type:* java.lang.Number

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idcsAtInput`<sup>Optional</sup> <a name="idcsAtInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idcsAtInput"></a>

```java
public java.lang.String getIdcsAtInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `integrationInstanceTypeInput`<sup>Optional</sup> <a name="integrationInstanceTypeInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.integrationInstanceTypeInput"></a>

```java
public java.lang.String getIntegrationInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `isByolInput`<sup>Optional</sup> <a name="isByolInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isByolInput"></a>

```java
public java.lang.Object getIsByolInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDisasterRecoveryEnabledInput`<sup>Optional</sup> <a name="isDisasterRecoveryEnabledInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isDisasterRecoveryEnabledInput"></a>

```java
public java.lang.Object getIsDisasterRecoveryEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isFileServerEnabledInput`<sup>Optional</sup> <a name="isFileServerEnabledInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isFileServerEnabledInput"></a>

```java
public java.lang.Object getIsFileServerEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isVisualBuilderEnabledInput`<sup>Optional</sup> <a name="isVisualBuilderEnabledInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isVisualBuilderEnabledInput"></a>

```java
public java.lang.Object getIsVisualBuilderEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `messagePacksInput`<sup>Optional</sup> <a name="messagePacksInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.messagePacksInput"></a>

```java
public java.lang.Number getMessagePacksInput();
```

- *Type:* java.lang.Number

---

##### `networkEndpointDetailsInput`<sup>Optional</sup> <a name="networkEndpointDetailsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.networkEndpointDetailsInput"></a>

```java
public IntegrationIntegrationInstanceNetworkEndpointDetails getNetworkEndpointDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a>

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts">IntegrationIntegrationInstanceTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `consumptionModel`<sup>Required</sup> <a name="consumptionModel" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.consumptionModel"></a>

```java
public java.lang.String getConsumptionModel();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `enableProcessAutomationTrigger`<sup>Required</sup> <a name="enableProcessAutomationTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.enableProcessAutomationTrigger"></a>

```java
public java.lang.Number getEnableProcessAutomationTrigger();
```

- *Type:* java.lang.Number

---

##### `extendDataRetentionTrigger`<sup>Required</sup> <a name="extendDataRetentionTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.extendDataRetentionTrigger"></a>

```java
public java.lang.Number getExtendDataRetentionTrigger();
```

- *Type:* java.lang.Number

---

##### `failoverTrigger`<sup>Required</sup> <a name="failoverTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.failoverTrigger"></a>

```java
public java.lang.Number getFailoverTrigger();
```

- *Type:* java.lang.Number

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsAt`<sup>Required</sup> <a name="idcsAt" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.idcsAt"></a>

```java
public java.lang.String getIdcsAt();
```

- *Type:* java.lang.String

---

##### `integrationInstanceType`<sup>Required</sup> <a name="integrationInstanceType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.integrationInstanceType"></a>

```java
public java.lang.String getIntegrationInstanceType();
```

- *Type:* java.lang.String

---

##### `isByol`<sup>Required</sup> <a name="isByol" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isByol"></a>

```java
public java.lang.Object getIsByol();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isDisasterRecoveryEnabled`<sup>Required</sup> <a name="isDisasterRecoveryEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isDisasterRecoveryEnabled"></a>

```java
public java.lang.Object getIsDisasterRecoveryEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isFileServerEnabled`<sup>Required</sup> <a name="isFileServerEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isFileServerEnabled"></a>

```java
public java.lang.Object getIsFileServerEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isVisualBuilderEnabled`<sup>Required</sup> <a name="isVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.isVisualBuilderEnabled"></a>

```java
public java.lang.Object getIsVisualBuilderEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `messagePacks`<sup>Required</sup> <a name="messagePacks" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.messagePacks"></a>

```java
public java.lang.Number getMessagePacks();
```

- *Type:* java.lang.Number

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationIntegrationInstanceAlternateCustomEndpoints <a name="IntegrationIntegrationInstanceAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceAlternateCustomEndpoints;

IntegrationIntegrationInstanceAlternateCustomEndpoints.builder()
    .hostname(java.lang.String)
//  .certificateSecretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#hostname IntegrationIntegrationInstance#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints.property.certificateSecretId">certificateSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#certificate_secret_id IntegrationIntegrationInstance#certificate_secret_id}. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#hostname IntegrationIntegrationInstance#hostname}.

---

##### `certificateSecretId`<sup>Optional</sup> <a name="certificateSecretId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints.property.certificateSecretId"></a>

```java
public java.lang.String getCertificateSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#certificate_secret_id IntegrationIntegrationInstance#certificate_secret_id}.

---

### IntegrationIntegrationInstanceAttachments <a name="IntegrationIntegrationInstanceAttachments" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceAttachments;

IntegrationIntegrationInstanceAttachments.builder()
    .build();
```


### IntegrationIntegrationInstanceConfig <a name="IntegrationIntegrationInstanceConfig" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceConfig;

IntegrationIntegrationInstanceConfig.builder()
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
    .displayName(java.lang.String)
    .integrationInstanceType(java.lang.String)
    .isByol(java.lang.Boolean)
    .isByol(IResolvable)
    .messagePacks(java.lang.Number)
//  .alternateCustomEndpoints(IResolvable)
//  .alternateCustomEndpoints(java.util.List<IntegrationIntegrationInstanceAlternateCustomEndpoints>)
//  .consumptionModel(java.lang.String)
//  .customEndpoint(IntegrationIntegrationInstanceCustomEndpoint)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .domainId(java.lang.String)
//  .enableProcessAutomationTrigger(java.lang.Number)
//  .extendDataRetentionTrigger(java.lang.Number)
//  .failoverTrigger(java.lang.Number)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .idcsAt(java.lang.String)
//  .isDisasterRecoveryEnabled(java.lang.Boolean)
//  .isDisasterRecoveryEnabled(IResolvable)
//  .isFileServerEnabled(java.lang.Boolean)
//  .isFileServerEnabled(IResolvable)
//  .isVisualBuilderEnabled(java.lang.Boolean)
//  .isVisualBuilderEnabled(IResolvable)
//  .networkEndpointDetails(IntegrationIntegrationInstanceNetworkEndpointDetails)
//  .shape(java.lang.String)
//  .state(java.lang.String)
//  .timeouts(IntegrationIntegrationInstanceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#compartment_id IntegrationIntegrationInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#display_name IntegrationIntegrationInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.integrationInstanceType">integrationInstanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#integration_instance_type IntegrationIntegrationInstance#integration_instance_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isByol">isByol</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_byol IntegrationIntegrationInstance#is_byol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.messagePacks">messagePacks</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#message_packs IntegrationIntegrationInstance#message_packs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.alternateCustomEndpoints">alternateCustomEndpoints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints">IntegrationIntegrationInstanceAlternateCustomEndpoints</a>></code> | alternate_custom_endpoints block. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.consumptionModel">consumptionModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#consumption_model IntegrationIntegrationInstance#consumption_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.customEndpoint">customEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a></code> | custom_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#defined_tags IntegrationIntegrationInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.domainId">domainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#domain_id IntegrationIntegrationInstance#domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.enableProcessAutomationTrigger">enableProcessAutomationTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#enable_process_automation_trigger IntegrationIntegrationInstance#enable_process_automation_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.extendDataRetentionTrigger">extendDataRetentionTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#extend_data_retention_trigger IntegrationIntegrationInstance#extend_data_retention_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.failoverTrigger">failoverTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#failover_trigger IntegrationIntegrationInstance#failover_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#freeform_tags IntegrationIntegrationInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#id IntegrationIntegrationInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.idcsAt">idcsAt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#idcs_at IntegrationIntegrationInstance#idcs_at}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isDisasterRecoveryEnabled">isDisasterRecoveryEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_disaster_recovery_enabled IntegrationIntegrationInstance#is_disaster_recovery_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isFileServerEnabled">isFileServerEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_file_server_enabled IntegrationIntegrationInstance#is_file_server_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isVisualBuilderEnabled">isVisualBuilderEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_visual_builder_enabled IntegrationIntegrationInstance#is_visual_builder_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.networkEndpointDetails">networkEndpointDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a></code> | network_endpoint_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#shape IntegrationIntegrationInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#state IntegrationIntegrationInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts">IntegrationIntegrationInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#compartment_id IntegrationIntegrationInstance#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#display_name IntegrationIntegrationInstance#display_name}.

---

##### `integrationInstanceType`<sup>Required</sup> <a name="integrationInstanceType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.integrationInstanceType"></a>

```java
public java.lang.String getIntegrationInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#integration_instance_type IntegrationIntegrationInstance#integration_instance_type}.

---

##### `isByol`<sup>Required</sup> <a name="isByol" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isByol"></a>

```java
public java.lang.Object getIsByol();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_byol IntegrationIntegrationInstance#is_byol}.

---

##### `messagePacks`<sup>Required</sup> <a name="messagePacks" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.messagePacks"></a>

```java
public java.lang.Number getMessagePacks();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#message_packs IntegrationIntegrationInstance#message_packs}.

---

##### `alternateCustomEndpoints`<sup>Optional</sup> <a name="alternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.alternateCustomEndpoints"></a>

```java
public java.lang.Object getAlternateCustomEndpoints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints">IntegrationIntegrationInstanceAlternateCustomEndpoints</a>>

alternate_custom_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#alternate_custom_endpoints IntegrationIntegrationInstance#alternate_custom_endpoints}

---

##### `consumptionModel`<sup>Optional</sup> <a name="consumptionModel" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.consumptionModel"></a>

```java
public java.lang.String getConsumptionModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#consumption_model IntegrationIntegrationInstance#consumption_model}.

---

##### `customEndpoint`<sup>Optional</sup> <a name="customEndpoint" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.customEndpoint"></a>

```java
public IntegrationIntegrationInstanceCustomEndpoint getCustomEndpoint();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a>

custom_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#custom_endpoint IntegrationIntegrationInstance#custom_endpoint}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#defined_tags IntegrationIntegrationInstance#defined_tags}.

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#domain_id IntegrationIntegrationInstance#domain_id}.

---

##### `enableProcessAutomationTrigger`<sup>Optional</sup> <a name="enableProcessAutomationTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.enableProcessAutomationTrigger"></a>

```java
public java.lang.Number getEnableProcessAutomationTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#enable_process_automation_trigger IntegrationIntegrationInstance#enable_process_automation_trigger}.

---

##### `extendDataRetentionTrigger`<sup>Optional</sup> <a name="extendDataRetentionTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.extendDataRetentionTrigger"></a>

```java
public java.lang.Number getExtendDataRetentionTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#extend_data_retention_trigger IntegrationIntegrationInstance#extend_data_retention_trigger}.

---

##### `failoverTrigger`<sup>Optional</sup> <a name="failoverTrigger" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.failoverTrigger"></a>

```java
public java.lang.Number getFailoverTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#failover_trigger IntegrationIntegrationInstance#failover_trigger}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#freeform_tags IntegrationIntegrationInstance#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#id IntegrationIntegrationInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idcsAt`<sup>Optional</sup> <a name="idcsAt" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.idcsAt"></a>

```java
public java.lang.String getIdcsAt();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#idcs_at IntegrationIntegrationInstance#idcs_at}.

---

##### `isDisasterRecoveryEnabled`<sup>Optional</sup> <a name="isDisasterRecoveryEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isDisasterRecoveryEnabled"></a>

```java
public java.lang.Object getIsDisasterRecoveryEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_disaster_recovery_enabled IntegrationIntegrationInstance#is_disaster_recovery_enabled}.

---

##### `isFileServerEnabled`<sup>Optional</sup> <a name="isFileServerEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isFileServerEnabled"></a>

```java
public java.lang.Object getIsFileServerEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_file_server_enabled IntegrationIntegrationInstance#is_file_server_enabled}.

---

##### `isVisualBuilderEnabled`<sup>Optional</sup> <a name="isVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.isVisualBuilderEnabled"></a>

```java
public java.lang.Object getIsVisualBuilderEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_visual_builder_enabled IntegrationIntegrationInstance#is_visual_builder_enabled}.

---

##### `networkEndpointDetails`<sup>Optional</sup> <a name="networkEndpointDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.networkEndpointDetails"></a>

```java
public IntegrationIntegrationInstanceNetworkEndpointDetails getNetworkEndpointDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a>

network_endpoint_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#network_endpoint_details IntegrationIntegrationInstance#network_endpoint_details}

---

##### `shape`<sup>Optional</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#shape IntegrationIntegrationInstance#shape}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#state IntegrationIntegrationInstance#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceConfig.property.timeouts"></a>

```java
public IntegrationIntegrationInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts">IntegrationIntegrationInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#timeouts IntegrationIntegrationInstance#timeouts}

---

### IntegrationIntegrationInstanceCustomEndpoint <a name="IntegrationIntegrationInstanceCustomEndpoint" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceCustomEndpoint;

IntegrationIntegrationInstanceCustomEndpoint.builder()
    .dnsZoneName(java.lang.String)
    .hostname(java.lang.String)
//  .certificateSecretId(java.lang.String)
//  .dnsType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.dnsZoneName">dnsZoneName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#dns_zone_name IntegrationIntegrationInstance#dns_zone_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#hostname IntegrationIntegrationInstance#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.certificateSecretId">certificateSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#certificate_secret_id IntegrationIntegrationInstance#certificate_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.dnsType">dnsType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#dns_type IntegrationIntegrationInstance#dns_type}. |

---

##### `dnsZoneName`<sup>Required</sup> <a name="dnsZoneName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.dnsZoneName"></a>

```java
public java.lang.String getDnsZoneName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#dns_zone_name IntegrationIntegrationInstance#dns_zone_name}.

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#hostname IntegrationIntegrationInstance#hostname}.

---

##### `certificateSecretId`<sup>Optional</sup> <a name="certificateSecretId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.certificateSecretId"></a>

```java
public java.lang.String getCertificateSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#certificate_secret_id IntegrationIntegrationInstance#certificate_secret_id}.

---

##### `dnsType`<sup>Optional</sup> <a name="dnsType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint.property.dnsType"></a>

```java
public java.lang.String getDnsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#dns_type IntegrationIntegrationInstance#dns_type}.

---

### IntegrationIntegrationInstanceDisasterRecoveryDetails <a name="IntegrationIntegrationInstanceDisasterRecoveryDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceDisasterRecoveryDetails;

IntegrationIntegrationInstanceDisasterRecoveryDetails.builder()
    .build();
```


### IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails <a name="IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails;

IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails.builder()
    .build();
```


### IntegrationIntegrationInstanceIdcsInfo <a name="IntegrationIntegrationInstanceIdcsInfo" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceIdcsInfo;

IntegrationIntegrationInstanceIdcsInfo.builder()
    .build();
```


### IntegrationIntegrationInstanceNetworkEndpointDetails <a name="IntegrationIntegrationInstanceNetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceNetworkEndpointDetails;

IntegrationIntegrationInstanceNetworkEndpointDetails.builder()
    .networkEndpointType(java.lang.String)
//  .allowlistedHttpIps(java.util.List<java.lang.String>)
//  .allowlistedHttpVcns(IResolvable)
//  .allowlistedHttpVcns(java.util.List<IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns>)
//  .isIntegrationVcnAllowlisted(java.lang.Boolean)
//  .isIntegrationVcnAllowlisted(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.networkEndpointType">networkEndpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#network_endpoint_type IntegrationIntegrationInstance#network_endpoint_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.allowlistedHttpIps">allowlistedHttpIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#allowlisted_http_ips IntegrationIntegrationInstance#allowlisted_http_ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.allowlistedHttpVcns">allowlistedHttpVcns</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns</a>></code> | allowlisted_http_vcns block. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.isIntegrationVcnAllowlisted">isIntegrationVcnAllowlisted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_integration_vcn_allowlisted IntegrationIntegrationInstance#is_integration_vcn_allowlisted}. |

---

##### `networkEndpointType`<sup>Required</sup> <a name="networkEndpointType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.networkEndpointType"></a>

```java
public java.lang.String getNetworkEndpointType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#network_endpoint_type IntegrationIntegrationInstance#network_endpoint_type}.

---

##### `allowlistedHttpIps`<sup>Optional</sup> <a name="allowlistedHttpIps" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.allowlistedHttpIps"></a>

```java
public java.util.List<java.lang.String> getAllowlistedHttpIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#allowlisted_http_ips IntegrationIntegrationInstance#allowlisted_http_ips}.

---

##### `allowlistedHttpVcns`<sup>Optional</sup> <a name="allowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.allowlistedHttpVcns"></a>

```java
public java.lang.Object getAllowlistedHttpVcns();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns</a>>

allowlisted_http_vcns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#allowlisted_http_vcns IntegrationIntegrationInstance#allowlisted_http_vcns}

---

##### `isIntegrationVcnAllowlisted`<sup>Optional</sup> <a name="isIntegrationVcnAllowlisted" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails.property.isIntegrationVcnAllowlisted"></a>

```java
public java.lang.Object getIsIntegrationVcnAllowlisted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#is_integration_vcn_allowlisted IntegrationIntegrationInstance#is_integration_vcn_allowlisted}.

---

### IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns <a name="IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns;

IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns.builder()
    .id(java.lang.String)
//  .allowlistedIps(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#id IntegrationIntegrationInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns.property.allowlistedIps">allowlistedIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#allowlisted_ips IntegrationIntegrationInstance#allowlisted_ips}. |

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#id IntegrationIntegrationInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `allowlistedIps`<sup>Optional</sup> <a name="allowlistedIps" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns.property.allowlistedIps"></a>

```java
public java.util.List<java.lang.String> getAllowlistedIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#allowlisted_ips IntegrationIntegrationInstance#allowlisted_ips}.

---

### IntegrationIntegrationInstancePrivateEndpointOutboundConnection <a name="IntegrationIntegrationInstancePrivateEndpointOutboundConnection" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstancePrivateEndpointOutboundConnection;

IntegrationIntegrationInstancePrivateEndpointOutboundConnection.builder()
    .build();
```


### IntegrationIntegrationInstanceTimeouts <a name="IntegrationIntegrationInstanceTimeouts" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceTimeouts;

IntegrationIntegrationInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#create IntegrationIntegrationInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#delete IntegrationIntegrationInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#update IntegrationIntegrationInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#create IntegrationIntegrationInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#delete IntegrationIntegrationInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_integration_instance#update IntegrationIntegrationInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationIntegrationInstanceAlternateCustomEndpointsList <a name="IntegrationIntegrationInstanceAlternateCustomEndpointsList" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceAlternateCustomEndpointsList;

new IntegrationIntegrationInstanceAlternateCustomEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.get"></a>

```java
public IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints">IntegrationIntegrationInstanceAlternateCustomEndpoints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints">IntegrationIntegrationInstanceAlternateCustomEndpoints</a>>

---


### IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference <a name="IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference;

new IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.resetCertificateSecretId">resetCertificateSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateSecretId` <a name="resetCertificateSecretId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.resetCertificateSecretId"></a>

```java
public void resetCertificateSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretVersion">certificateSecretVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.dnsType">dnsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.dnsZoneName">dnsZoneName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.managedType">managedType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretIdInput">certificateSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretId">certificateSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints">IntegrationIntegrationInstanceAlternateCustomEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `certificateSecretVersion`<sup>Required</sup> <a name="certificateSecretVersion" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretVersion"></a>

```java
public java.lang.Number getCertificateSecretVersion();
```

- *Type:* java.lang.Number

---

##### `dnsType`<sup>Required</sup> <a name="dnsType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.dnsType"></a>

```java
public java.lang.String getDnsType();
```

- *Type:* java.lang.String

---

##### `dnsZoneName`<sup>Required</sup> <a name="dnsZoneName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.dnsZoneName"></a>

```java
public java.lang.String getDnsZoneName();
```

- *Type:* java.lang.String

---

##### `managedType`<sup>Required</sup> <a name="managedType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.managedType"></a>

```java
public java.lang.String getManagedType();
```

- *Type:* java.lang.String

---

##### `certificateSecretIdInput`<sup>Optional</sup> <a name="certificateSecretIdInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretIdInput"></a>

```java
public java.lang.String getCertificateSecretIdInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `certificateSecretId`<sup>Required</sup> <a name="certificateSecretId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretId"></a>

```java
public java.lang.String getCertificateSecretId();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpointsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAlternateCustomEndpoints">IntegrationIntegrationInstanceAlternateCustomEndpoints</a>

---


### IntegrationIntegrationInstanceAttachmentsList <a name="IntegrationIntegrationInstanceAttachmentsList" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceAttachmentsList;

new IntegrationIntegrationInstanceAttachmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.get"></a>

```java
public IntegrationIntegrationInstanceAttachmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IntegrationIntegrationInstanceAttachmentsOutputReference <a name="IntegrationIntegrationInstanceAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceAttachmentsOutputReference;

new IntegrationIntegrationInstanceAttachmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.isImplicit">isImplicit</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetInstanceUrl">targetInstanceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetRole">targetRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetServiceType">targetServiceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachments">IntegrationIntegrationInstanceAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isImplicit`<sup>Required</sup> <a name="isImplicit" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.isImplicit"></a>

```java
public IResolvable getIsImplicit();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

##### `targetInstanceUrl`<sup>Required</sup> <a name="targetInstanceUrl" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetInstanceUrl"></a>

```java
public java.lang.String getTargetInstanceUrl();
```

- *Type:* java.lang.String

---

##### `targetRole`<sup>Required</sup> <a name="targetRole" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetRole"></a>

```java
public java.lang.String getTargetRole();
```

- *Type:* java.lang.String

---

##### `targetServiceType`<sup>Required</sup> <a name="targetServiceType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.targetServiceType"></a>

```java
public java.lang.String getTargetServiceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachmentsOutputReference.property.internalValue"></a>

```java
public IntegrationIntegrationInstanceAttachments getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceAttachments">IntegrationIntegrationInstanceAttachments</a>

---


### IntegrationIntegrationInstanceCustomEndpointOutputReference <a name="IntegrationIntegrationInstanceCustomEndpointOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceCustomEndpointOutputReference;

new IntegrationIntegrationInstanceCustomEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.resetCertificateSecretId">resetCertificateSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.resetDnsType">resetDnsType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateSecretId` <a name="resetCertificateSecretId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.resetCertificateSecretId"></a>

```java
public void resetCertificateSecretId()
```

##### `resetDnsType` <a name="resetDnsType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.resetDnsType"></a>

```java
public void resetDnsType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretVersion">certificateSecretVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.managedType">managedType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretIdInput">certificateSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsTypeInput">dnsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsZoneNameInput">dnsZoneNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretId">certificateSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsType">dnsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsZoneName">dnsZoneName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `certificateSecretVersion`<sup>Required</sup> <a name="certificateSecretVersion" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretVersion"></a>

```java
public java.lang.Number getCertificateSecretVersion();
```

- *Type:* java.lang.Number

---

##### `managedType`<sup>Required</sup> <a name="managedType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.managedType"></a>

```java
public java.lang.String getManagedType();
```

- *Type:* java.lang.String

---

##### `certificateSecretIdInput`<sup>Optional</sup> <a name="certificateSecretIdInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretIdInput"></a>

```java
public java.lang.String getCertificateSecretIdInput();
```

- *Type:* java.lang.String

---

##### `dnsTypeInput`<sup>Optional</sup> <a name="dnsTypeInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsTypeInput"></a>

```java
public java.lang.String getDnsTypeInput();
```

- *Type:* java.lang.String

---

##### `dnsZoneNameInput`<sup>Optional</sup> <a name="dnsZoneNameInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsZoneNameInput"></a>

```java
public java.lang.String getDnsZoneNameInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `certificateSecretId`<sup>Required</sup> <a name="certificateSecretId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.certificateSecretId"></a>

```java
public java.lang.String getCertificateSecretId();
```

- *Type:* java.lang.String

---

##### `dnsType`<sup>Required</sup> <a name="dnsType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsType"></a>

```java
public java.lang.String getDnsType();
```

- *Type:* java.lang.String

---

##### `dnsZoneName`<sup>Required</sup> <a name="dnsZoneName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.dnsZoneName"></a>

```java
public java.lang.String getDnsZoneName();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpointOutputReference.property.internalValue"></a>

```java
public IntegrationIntegrationInstanceCustomEndpoint getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceCustomEndpoint">IntegrationIntegrationInstanceCustomEndpoint</a>

---


### IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList <a name="IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList;

new IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get"></a>

```java
public IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference <a name="IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference;

new IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.timeRoleChanged">timeRoleChanged</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails">IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `timeRoleChanged`<sup>Required</sup> <a name="timeRoleChanged" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.timeRoleChanged"></a>

```java
public java.lang.String getTimeRoleChanged();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsOutputReference.property.internalValue"></a>

```java
public IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails">IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetails</a>

---


### IntegrationIntegrationInstanceDisasterRecoveryDetailsList <a name="IntegrationIntegrationInstanceDisasterRecoveryDetailsList" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList;

new IntegrationIntegrationInstanceDisasterRecoveryDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.get"></a>

```java
public IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference <a name="IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference;

new IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.crossRegionIntegrationInstanceDetails">crossRegionIntegrationInstanceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList">IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.regionalInstanceUrl">regionalInstanceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetails">IntegrationIntegrationInstanceDisasterRecoveryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crossRegionIntegrationInstanceDetails`<sup>Required</sup> <a name="crossRegionIntegrationInstanceDetails" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.crossRegionIntegrationInstanceDetails"></a>

```java
public IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList getCrossRegionIntegrationInstanceDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList">IntegrationIntegrationInstanceDisasterRecoveryDetailsCrossRegionIntegrationInstanceDetailsList</a>

---

##### `regionalInstanceUrl`<sup>Required</sup> <a name="regionalInstanceUrl" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.regionalInstanceUrl"></a>

```java
public java.lang.String getRegionalInstanceUrl();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetailsOutputReference.property.internalValue"></a>

```java
public IntegrationIntegrationInstanceDisasterRecoveryDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceDisasterRecoveryDetails">IntegrationIntegrationInstanceDisasterRecoveryDetails</a>

---


### IntegrationIntegrationInstanceIdcsInfoList <a name="IntegrationIntegrationInstanceIdcsInfoList" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceIdcsInfoList;

new IntegrationIntegrationInstanceIdcsInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.get"></a>

```java
public IntegrationIntegrationInstanceIdcsInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IntegrationIntegrationInstanceIdcsInfoOutputReference <a name="IntegrationIntegrationInstanceIdcsInfoOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceIdcsInfoOutputReference;

new IntegrationIntegrationInstanceIdcsInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppDisplayName">idcsAppDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppId">idcsAppId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppLocationUrl">idcsAppLocationUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppName">idcsAppName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.instancePrimaryAudienceUrl">instancePrimaryAudienceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfo">IntegrationIntegrationInstanceIdcsInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idcsAppDisplayName`<sup>Required</sup> <a name="idcsAppDisplayName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppDisplayName"></a>

```java
public java.lang.String getIdcsAppDisplayName();
```

- *Type:* java.lang.String

---

##### `idcsAppId`<sup>Required</sup> <a name="idcsAppId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppId"></a>

```java
public java.lang.String getIdcsAppId();
```

- *Type:* java.lang.String

---

##### `idcsAppLocationUrl`<sup>Required</sup> <a name="idcsAppLocationUrl" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppLocationUrl"></a>

```java
public java.lang.String getIdcsAppLocationUrl();
```

- *Type:* java.lang.String

---

##### `idcsAppName`<sup>Required</sup> <a name="idcsAppName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.idcsAppName"></a>

```java
public java.lang.String getIdcsAppName();
```

- *Type:* java.lang.String

---

##### `instancePrimaryAudienceUrl`<sup>Required</sup> <a name="instancePrimaryAudienceUrl" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.instancePrimaryAudienceUrl"></a>

```java
public java.lang.String getInstancePrimaryAudienceUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfoOutputReference.property.internalValue"></a>

```java
public IntegrationIntegrationInstanceIdcsInfo getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceIdcsInfo">IntegrationIntegrationInstanceIdcsInfo</a>

---


### IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList <a name="IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList;

new IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.get"></a>

```java
public IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns</a>>

---


### IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference <a name="IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference;

new IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resetAllowlistedIps">resetAllowlistedIps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowlistedIps` <a name="resetAllowlistedIps" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.resetAllowlistedIps"></a>

```java
public void resetAllowlistedIps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.allowlistedIpsInput">allowlistedIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.allowlistedIps">allowlistedIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowlistedIpsInput`<sup>Optional</sup> <a name="allowlistedIpsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.allowlistedIpsInput"></a>

```java
public java.util.List<java.lang.String> getAllowlistedIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `allowlistedIps`<sup>Required</sup> <a name="allowlistedIps" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.allowlistedIps"></a>

```java
public java.util.List<java.lang.String> getAllowlistedIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns</a>

---


### IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference <a name="IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference;

new IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.putAllowlistedHttpVcns">putAllowlistedHttpVcns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resetAllowlistedHttpIps">resetAllowlistedHttpIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resetAllowlistedHttpVcns">resetAllowlistedHttpVcns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resetIsIntegrationVcnAllowlisted">resetIsIntegrationVcnAllowlisted</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowlistedHttpVcns` <a name="putAllowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.putAllowlistedHttpVcns"></a>

```java
public void putAllowlistedHttpVcns(IResolvable OR java.util.List<IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.putAllowlistedHttpVcns.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns</a>>

---

##### `resetAllowlistedHttpIps` <a name="resetAllowlistedHttpIps" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resetAllowlistedHttpIps"></a>

```java
public void resetAllowlistedHttpIps()
```

##### `resetAllowlistedHttpVcns` <a name="resetAllowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resetAllowlistedHttpVcns"></a>

```java
public void resetAllowlistedHttpVcns()
```

##### `resetIsIntegrationVcnAllowlisted` <a name="resetIsIntegrationVcnAllowlisted" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.resetIsIntegrationVcnAllowlisted"></a>

```java
public void resetIsIntegrationVcnAllowlisted()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpVcns">allowlistedHttpVcns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpIpsInput">allowlistedHttpIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpVcnsInput">allowlistedHttpVcnsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.isIntegrationVcnAllowlistedInput">isIntegrationVcnAllowlistedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointTypeInput">networkEndpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpIps">allowlistedHttpIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.isIntegrationVcnAllowlisted">isIntegrationVcnAllowlisted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointType">networkEndpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowlistedHttpVcns`<sup>Required</sup> <a name="allowlistedHttpVcns" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpVcns"></a>

```java
public IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList getAllowlistedHttpVcns();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcnsList</a>

---

##### `allowlistedHttpIpsInput`<sup>Optional</sup> <a name="allowlistedHttpIpsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpIpsInput"></a>

```java
public java.util.List<java.lang.String> getAllowlistedHttpIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowlistedHttpVcnsInput`<sup>Optional</sup> <a name="allowlistedHttpVcnsInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpVcnsInput"></a>

```java
public java.lang.Object getAllowlistedHttpVcnsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns">IntegrationIntegrationInstanceNetworkEndpointDetailsAllowlistedHttpVcns</a>>

---

##### `isIntegrationVcnAllowlistedInput`<sup>Optional</sup> <a name="isIntegrationVcnAllowlistedInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.isIntegrationVcnAllowlistedInput"></a>

```java
public java.lang.Object getIsIntegrationVcnAllowlistedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkEndpointTypeInput`<sup>Optional</sup> <a name="networkEndpointTypeInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointTypeInput"></a>

```java
public java.lang.String getNetworkEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `allowlistedHttpIps`<sup>Required</sup> <a name="allowlistedHttpIps" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.allowlistedHttpIps"></a>

```java
public java.util.List<java.lang.String> getAllowlistedHttpIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isIntegrationVcnAllowlisted`<sup>Required</sup> <a name="isIntegrationVcnAllowlisted" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.isIntegrationVcnAllowlisted"></a>

```java
public java.lang.Object getIsIntegrationVcnAllowlisted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkEndpointType`<sup>Required</sup> <a name="networkEndpointType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.networkEndpointType"></a>

```java
public java.lang.String getNetworkEndpointType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetailsOutputReference.property.internalValue"></a>

```java
public IntegrationIntegrationInstanceNetworkEndpointDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceNetworkEndpointDetails">IntegrationIntegrationInstanceNetworkEndpointDetails</a>

---


### IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList <a name="IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList;

new IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.get"></a>

```java
public IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference <a name="IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference;

new IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.outboundConnectionType">outboundConnectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnection">IntegrationIntegrationInstancePrivateEndpointOutboundConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `outboundConnectionType`<sup>Required</sup> <a name="outboundConnectionType" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.outboundConnectionType"></a>

```java
public java.lang.String getOutboundConnectionType();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnectionOutputReference.property.internalValue"></a>

```java
public IntegrationIntegrationInstancePrivateEndpointOutboundConnection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstancePrivateEndpointOutboundConnection">IntegrationIntegrationInstancePrivateEndpointOutboundConnection</a>

---


### IntegrationIntegrationInstanceTimeoutsOutputReference <a name="IntegrationIntegrationInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.integration_integration_instance.IntegrationIntegrationInstanceTimeoutsOutputReference;

new IntegrationIntegrationInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts">IntegrationIntegrationInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.integrationIntegrationInstance.IntegrationIntegrationInstanceTimeouts">IntegrationIntegrationInstanceTimeouts</a>

---



