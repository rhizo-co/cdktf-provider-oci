# `apmSyntheticsOnPremiseVantagePointWorker` Submodule <a name="`apmSyntheticsOnPremiseVantagePointWorker` Submodule" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApmSyntheticsOnPremiseVantagePointWorker <a name="ApmSyntheticsOnPremiseVantagePointWorker" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker oci_apm_synthetics_on_premise_vantage_point_worker}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_on_premise_vantage_point_worker.ApmSyntheticsOnPremiseVantagePointWorker;

ApmSyntheticsOnPremiseVantagePointWorker.Builder.create(Construct scope, java.lang.String id)
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
    .apmDomainId(java.lang.String)
    .name(java.lang.String)
    .onPremiseVantagePointId(java.lang.String)
    .resourcePrincipalTokenPublicKey(java.lang.String)
    .version(java.lang.String)
//  .configurationDetails(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .priority(java.lang.Number)
//  .status(java.lang.String)
//  .timeouts(ApmSyntheticsOnPremiseVantagePointWorkerTimeouts)
//  .workerType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.apmDomainId">apmDomainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#apm_domain_id ApmSyntheticsOnPremiseVantagePointWorker#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#name ApmSyntheticsOnPremiseVantagePointWorker#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.onPremiseVantagePointId">onPremiseVantagePointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#on_premise_vantage_point_id ApmSyntheticsOnPremiseVantagePointWorker#on_premise_vantage_point_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.resourcePrincipalTokenPublicKey">resourcePrincipalTokenPublicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#resource_principal_token_public_key ApmSyntheticsOnPremiseVantagePointWorker#resource_principal_token_public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#version ApmSyntheticsOnPremiseVantagePointWorker#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.configurationDetails">configurationDetails</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#configuration_details ApmSyntheticsOnPremiseVantagePointWorker#configuration_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#defined_tags ApmSyntheticsOnPremiseVantagePointWorker#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#freeform_tags ApmSyntheticsOnPremiseVantagePointWorker#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#id ApmSyntheticsOnPremiseVantagePointWorker#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#priority ApmSyntheticsOnPremiseVantagePointWorker#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#status ApmSyntheticsOnPremiseVantagePointWorker#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.workerType">workerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#worker_type ApmSyntheticsOnPremiseVantagePointWorker#worker_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.apmDomainId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#apm_domain_id ApmSyntheticsOnPremiseVantagePointWorker#apm_domain_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#name ApmSyntheticsOnPremiseVantagePointWorker#name}.

---

##### `onPremiseVantagePointId`<sup>Required</sup> <a name="onPremiseVantagePointId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.onPremiseVantagePointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#on_premise_vantage_point_id ApmSyntheticsOnPremiseVantagePointWorker#on_premise_vantage_point_id}.

---

##### `resourcePrincipalTokenPublicKey`<sup>Required</sup> <a name="resourcePrincipalTokenPublicKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.resourcePrincipalTokenPublicKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#resource_principal_token_public_key ApmSyntheticsOnPremiseVantagePointWorker#resource_principal_token_public_key}.

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#version ApmSyntheticsOnPremiseVantagePointWorker#version}.

---

##### `configurationDetails`<sup>Optional</sup> <a name="configurationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.configurationDetails"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#configuration_details ApmSyntheticsOnPremiseVantagePointWorker#configuration_details}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#defined_tags ApmSyntheticsOnPremiseVantagePointWorker#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#freeform_tags ApmSyntheticsOnPremiseVantagePointWorker#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#id ApmSyntheticsOnPremiseVantagePointWorker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#priority ApmSyntheticsOnPremiseVantagePointWorker#priority}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#status ApmSyntheticsOnPremiseVantagePointWorker#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#timeouts ApmSyntheticsOnPremiseVantagePointWorker#timeouts}

---

##### `workerType`<sup>Optional</sup> <a name="workerType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.workerType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#worker_type ApmSyntheticsOnPremiseVantagePointWorker#worker_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetConfigurationDetails">resetConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetWorkerType">resetWorkerType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.putTimeouts"></a>

```java
public void putTimeouts(ApmSyntheticsOnPremiseVantagePointWorkerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a>

---

##### `resetConfigurationDetails` <a name="resetConfigurationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetConfigurationDetails"></a>

```java
public void resetConfigurationDetails()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetId"></a>

```java
public void resetId()
```

##### `resetPriority` <a name="resetPriority" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWorkerType` <a name="resetWorkerType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetWorkerType"></a>

```java
public void resetWorkerType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApmSyntheticsOnPremiseVantagePointWorker resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_on_premise_vantage_point_worker.ApmSyntheticsOnPremiseVantagePointWorker;

ApmSyntheticsOnPremiseVantagePointWorker.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_on_premise_vantage_point_worker.ApmSyntheticsOnPremiseVantagePointWorker;

ApmSyntheticsOnPremiseVantagePointWorker.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_on_premise_vantage_point_worker.ApmSyntheticsOnPremiseVantagePointWorker;

ApmSyntheticsOnPremiseVantagePointWorker.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_on_premise_vantage_point_worker.ApmSyntheticsOnPremiseVantagePointWorker;

ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApmSyntheticsOnPremiseVantagePointWorker resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApmSyntheticsOnPremiseVantagePointWorker to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApmSyntheticsOnPremiseVantagePointWorker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApmSyntheticsOnPremiseVantagePointWorker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.geoInfo">geoInfo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.identityInfo">identityInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList">ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.monitorList">monitorList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList">ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.opvpId">opvpId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.opvpName">opvpName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.runtimeId">runtimeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeLastSyncUp">timeLastSyncUp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference">ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.versionDetails">versionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList">ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.apmDomainIdInput">apmDomainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.configurationDetailsInput">configurationDetailsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.onPremiseVantagePointIdInput">onPremiseVantagePointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.resourcePrincipalTokenPublicKeyInput">resourcePrincipalTokenPublicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.workerTypeInput">workerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.apmDomainId">apmDomainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.configurationDetails">configurationDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.onPremiseVantagePointId">onPremiseVantagePointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.resourcePrincipalTokenPublicKey">resourcePrincipalTokenPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.workerType">workerType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `geoInfo`<sup>Required</sup> <a name="geoInfo" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.geoInfo"></a>

```java
public java.lang.String getGeoInfo();
```

- *Type:* java.lang.String

---

##### `identityInfo`<sup>Required</sup> <a name="identityInfo" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.identityInfo"></a>

```java
public ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList getIdentityInfo();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList">ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList</a>

---

##### `monitorList`<sup>Required</sup> <a name="monitorList" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.monitorList"></a>

```java
public ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList getMonitorList();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList">ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList</a>

---

##### `opvpId`<sup>Required</sup> <a name="opvpId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.opvpId"></a>

```java
public java.lang.String getOpvpId();
```

- *Type:* java.lang.String

---

##### `opvpName`<sup>Required</sup> <a name="opvpName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.opvpName"></a>

```java
public java.lang.String getOpvpName();
```

- *Type:* java.lang.String

---

##### `runtimeId`<sup>Required</sup> <a name="runtimeId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.runtimeId"></a>

```java
public java.lang.String getRuntimeId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeLastSyncUp`<sup>Required</sup> <a name="timeLastSyncUp" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeLastSyncUp"></a>

```java
public java.lang.String getTimeLastSyncUp();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeouts"></a>

```java
public ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference">ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `versionDetails`<sup>Required</sup> <a name="versionDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.versionDetails"></a>

```java
public ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList getVersionDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList">ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList</a>

---

##### `apmDomainIdInput`<sup>Optional</sup> <a name="apmDomainIdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.apmDomainIdInput"></a>

```java
public java.lang.String getApmDomainIdInput();
```

- *Type:* java.lang.String

---

##### `configurationDetailsInput`<sup>Optional</sup> <a name="configurationDetailsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.configurationDetailsInput"></a>

```java
public java.lang.String getConfigurationDetailsInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `onPremiseVantagePointIdInput`<sup>Optional</sup> <a name="onPremiseVantagePointIdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.onPremiseVantagePointIdInput"></a>

```java
public java.lang.String getOnPremiseVantagePointIdInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `resourcePrincipalTokenPublicKeyInput`<sup>Optional</sup> <a name="resourcePrincipalTokenPublicKeyInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.resourcePrincipalTokenPublicKeyInput"></a>

```java
public java.lang.String getResourcePrincipalTokenPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `workerTypeInput`<sup>Optional</sup> <a name="workerTypeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.workerTypeInput"></a>

```java
public java.lang.String getWorkerTypeInput();
```

- *Type:* java.lang.String

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.apmDomainId"></a>

```java
public java.lang.String getApmDomainId();
```

- *Type:* java.lang.String

---

##### `configurationDetails`<sup>Required</sup> <a name="configurationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.configurationDetails"></a>

```java
public java.lang.String getConfigurationDetails();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `onPremiseVantagePointId`<sup>Required</sup> <a name="onPremiseVantagePointId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.onPremiseVantagePointId"></a>

```java
public java.lang.String getOnPremiseVantagePointId();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `resourcePrincipalTokenPublicKey`<sup>Required</sup> <a name="resourcePrincipalTokenPublicKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.resourcePrincipalTokenPublicKey"></a>

```java
public java.lang.String getResourcePrincipalTokenPublicKey();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `workerType`<sup>Required</sup> <a name="workerType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.workerType"></a>

```java
public java.lang.String getWorkerType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApmSyntheticsOnPremiseVantagePointWorkerConfig <a name="ApmSyntheticsOnPremiseVantagePointWorkerConfig" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_on_premise_vantage_point_worker.ApmSyntheticsOnPremiseVantagePointWorkerConfig;

ApmSyntheticsOnPremiseVantagePointWorkerConfig.builder()
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
    .apmDomainId(java.lang.String)
    .name(java.lang.String)
    .onPremiseVantagePointId(java.lang.String)
    .resourcePrincipalTokenPublicKey(java.lang.String)
    .version(java.lang.String)
//  .configurationDetails(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .priority(java.lang.Number)
//  .status(java.lang.String)
//  .timeouts(ApmSyntheticsOnPremiseVantagePointWorkerTimeouts)
//  .workerType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.apmDomainId">apmDomainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#apm_domain_id ApmSyntheticsOnPremiseVantagePointWorker#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#name ApmSyntheticsOnPremiseVantagePointWorker#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.onPremiseVantagePointId">onPremiseVantagePointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#on_premise_vantage_point_id ApmSyntheticsOnPremiseVantagePointWorker#on_premise_vantage_point_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.resourcePrincipalTokenPublicKey">resourcePrincipalTokenPublicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#resource_principal_token_public_key ApmSyntheticsOnPremiseVantagePointWorker#resource_principal_token_public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#version ApmSyntheticsOnPremiseVantagePointWorker#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.configurationDetails">configurationDetails</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#configuration_details ApmSyntheticsOnPremiseVantagePointWorker#configuration_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#defined_tags ApmSyntheticsOnPremiseVantagePointWorker#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#freeform_tags ApmSyntheticsOnPremiseVantagePointWorker#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#id ApmSyntheticsOnPremiseVantagePointWorker#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#priority ApmSyntheticsOnPremiseVantagePointWorker#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#status ApmSyntheticsOnPremiseVantagePointWorker#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.workerType">workerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#worker_type ApmSyntheticsOnPremiseVantagePointWorker#worker_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.apmDomainId"></a>

```java
public java.lang.String getApmDomainId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#apm_domain_id ApmSyntheticsOnPremiseVantagePointWorker#apm_domain_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#name ApmSyntheticsOnPremiseVantagePointWorker#name}.

---

##### `onPremiseVantagePointId`<sup>Required</sup> <a name="onPremiseVantagePointId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.onPremiseVantagePointId"></a>

```java
public java.lang.String getOnPremiseVantagePointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#on_premise_vantage_point_id ApmSyntheticsOnPremiseVantagePointWorker#on_premise_vantage_point_id}.

---

##### `resourcePrincipalTokenPublicKey`<sup>Required</sup> <a name="resourcePrincipalTokenPublicKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.resourcePrincipalTokenPublicKey"></a>

```java
public java.lang.String getResourcePrincipalTokenPublicKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#resource_principal_token_public_key ApmSyntheticsOnPremiseVantagePointWorker#resource_principal_token_public_key}.

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#version ApmSyntheticsOnPremiseVantagePointWorker#version}.

---

##### `configurationDetails`<sup>Optional</sup> <a name="configurationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.configurationDetails"></a>

```java
public java.lang.String getConfigurationDetails();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#configuration_details ApmSyntheticsOnPremiseVantagePointWorker#configuration_details}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#defined_tags ApmSyntheticsOnPremiseVantagePointWorker#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#freeform_tags ApmSyntheticsOnPremiseVantagePointWorker#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#id ApmSyntheticsOnPremiseVantagePointWorker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#priority ApmSyntheticsOnPremiseVantagePointWorker#priority}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#status ApmSyntheticsOnPremiseVantagePointWorker#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.timeouts"></a>

```java
public ApmSyntheticsOnPremiseVantagePointWorkerTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#timeouts ApmSyntheticsOnPremiseVantagePointWorker#timeouts}

---

##### `workerType`<sup>Optional</sup> <a name="workerType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.workerType"></a>

```java
public java.lang.String getWorkerType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#worker_type ApmSyntheticsOnPremiseVantagePointWorker#worker_type}.

---

### ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo <a name="ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_on_premise_vantage_point_worker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo;

ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo.builder()
    .build();
```


### ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct <a name="ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_on_premise_vantage_point_worker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct;

ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct.builder()
    .build();
```


### ApmSyntheticsOnPremiseVantagePointWorkerTimeouts <a name="ApmSyntheticsOnPremiseVantagePointWorkerTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_on_premise_vantage_point_worker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts;

ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#create ApmSyntheticsOnPremiseVantagePointWorker#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#delete ApmSyntheticsOnPremiseVantagePointWorker#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#update ApmSyntheticsOnPremiseVantagePointWorker#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#create ApmSyntheticsOnPremiseVantagePointWorker#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#delete ApmSyntheticsOnPremiseVantagePointWorker#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#update ApmSyntheticsOnPremiseVantagePointWorker#update}.

---

### ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails <a name="ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_on_premise_vantage_point_worker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails;

ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList <a name="ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_on_premise_vantage_point_worker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList;

new ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.get"></a>

```java
public ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference <a name="ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_on_premise_vantage_point_worker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference;

new ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.apmShortId">apmShortId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.collectorEndPoint">collectorEndPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.regionName">regionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo">ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apmShortId`<sup>Required</sup> <a name="apmShortId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.apmShortId"></a>

```java
public java.lang.String getApmShortId();
```

- *Type:* java.lang.String

---

##### `collectorEndPoint`<sup>Required</sup> <a name="collectorEndPoint" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.collectorEndPoint"></a>

```java
public java.lang.String getCollectorEndPoint();
```

- *Type:* java.lang.String

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.internalValue"></a>

```java
public ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo">ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo</a>

---


### ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList <a name="ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_on_premise_vantage_point_worker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList;

new ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.get"></a>

```java
public ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference <a name="ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_on_premise_vantage_point_worker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference;

new ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.isRunNow">isRunNow</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.monitorType">monitorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.timeAssigned">timeAssigned</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct">ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isRunNow`<sup>Required</sup> <a name="isRunNow" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.isRunNow"></a>

```java
public IResolvable getIsRunNow();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `monitorType`<sup>Required</sup> <a name="monitorType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.monitorType"></a>

```java
public java.lang.String getMonitorType();
```

- *Type:* java.lang.String

---

##### `timeAssigned`<sup>Required</sup> <a name="timeAssigned" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.timeAssigned"></a>

```java
public java.lang.String getTimeAssigned();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.internalValue"></a>

```java
public ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct">ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct</a>

---


### ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference <a name="ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_on_premise_vantage_point_worker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference;

new ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a>

---


### ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList <a name="ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_on_premise_vantage_point_worker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList;

new ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.get"></a>

```java
public ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference <a name="ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apm_synthetics_on_premise_vantage_point_worker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference;

new ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.latestVersion">latestVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.minSupportedVersion">minSupportedVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails">ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.latestVersion"></a>

```java
public java.lang.String getLatestVersion();
```

- *Type:* java.lang.String

---

##### `minSupportedVersion`<sup>Required</sup> <a name="minSupportedVersion" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.minSupportedVersion"></a>

```java
public java.lang.String getMinSupportedVersion();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.internalValue"></a>

```java
public ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails">ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails</a>

---



