# `oceOceInstance` Submodule <a name="`oceOceInstance` Submodule" id="rhizo-co-terraform-provider-oci.oceOceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceOceInstance <a name="OceOceInstance" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance oci_oce_oce_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.oce_oce_instance.OceOceInstance;

OceOceInstance.Builder.create(Construct scope, java.lang.String id)
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
    .adminEmail(java.lang.String)
    .compartmentId(java.lang.String)
    .idcsAccessToken(java.lang.String)
    .name(java.lang.String)
    .objectStorageNamespace(java.lang.String)
    .tenancyId(java.lang.String)
    .tenancyName(java.lang.String)
//  .addOnFeatures(java.util.List<java.lang.String>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .drRegion(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .instanceAccessType(java.lang.String)
//  .instanceLicenseType(java.lang.String)
//  .instanceUsageType(java.lang.String)
//  .timeouts(OceOceInstanceTimeouts)
//  .upgradeSchedule(java.lang.String)
//  .wafPrimaryDomain(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.adminEmail">adminEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#admin_email OceOceInstance#admin_email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#compartment_id OceOceInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.idcsAccessToken">idcsAccessToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#idcs_access_token OceOceInstance#idcs_access_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#name OceOceInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.objectStorageNamespace">objectStorageNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#object_storage_namespace OceOceInstance#object_storage_namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.tenancyId">tenancyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_id OceOceInstance#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.tenancyName">tenancyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_name OceOceInstance#tenancy_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.addOnFeatures">addOnFeatures</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#add_on_features OceOceInstance#add_on_features}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#defined_tags OceOceInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#description OceOceInstance#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.drRegion">drRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#dr_region OceOceInstance#dr_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#freeform_tags OceOceInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#id OceOceInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.instanceAccessType">instanceAccessType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_access_type OceOceInstance#instance_access_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.instanceLicenseType">instanceLicenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_license_type OceOceInstance#instance_license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.instanceUsageType">instanceUsageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_usage_type OceOceInstance#instance_usage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.upgradeSchedule">upgradeSchedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#upgrade_schedule OceOceInstance#upgrade_schedule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.wafPrimaryDomain">wafPrimaryDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#waf_primary_domain OceOceInstance#waf_primary_domain}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminEmail`<sup>Required</sup> <a name="adminEmail" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.adminEmail"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#admin_email OceOceInstance#admin_email}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#compartment_id OceOceInstance#compartment_id}.

---

##### `idcsAccessToken`<sup>Required</sup> <a name="idcsAccessToken" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.idcsAccessToken"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#idcs_access_token OceOceInstance#idcs_access_token}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#name OceOceInstance#name}.

---

##### `objectStorageNamespace`<sup>Required</sup> <a name="objectStorageNamespace" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.objectStorageNamespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#object_storage_namespace OceOceInstance#object_storage_namespace}.

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.tenancyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_id OceOceInstance#tenancy_id}.

---

##### `tenancyName`<sup>Required</sup> <a name="tenancyName" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.tenancyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_name OceOceInstance#tenancy_name}.

---

##### `addOnFeatures`<sup>Optional</sup> <a name="addOnFeatures" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.addOnFeatures"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#add_on_features OceOceInstance#add_on_features}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#defined_tags OceOceInstance#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#description OceOceInstance#description}.

---

##### `drRegion`<sup>Optional</sup> <a name="drRegion" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.drRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#dr_region OceOceInstance#dr_region}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#freeform_tags OceOceInstance#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#id OceOceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceAccessType`<sup>Optional</sup> <a name="instanceAccessType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.instanceAccessType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_access_type OceOceInstance#instance_access_type}.

---

##### `instanceLicenseType`<sup>Optional</sup> <a name="instanceLicenseType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.instanceLicenseType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_license_type OceOceInstance#instance_license_type}.

---

##### `instanceUsageType`<sup>Optional</sup> <a name="instanceUsageType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.instanceUsageType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_usage_type OceOceInstance#instance_usage_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#timeouts OceOceInstance#timeouts}

---

##### `upgradeSchedule`<sup>Optional</sup> <a name="upgradeSchedule" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.upgradeSchedule"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#upgrade_schedule OceOceInstance#upgrade_schedule}.

---

##### `wafPrimaryDomain`<sup>Optional</sup> <a name="wafPrimaryDomain" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.wafPrimaryDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#waf_primary_domain OceOceInstance#waf_primary_domain}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetAddOnFeatures">resetAddOnFeatures</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDrRegion">resetDrRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceAccessType">resetInstanceAccessType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceLicenseType">resetInstanceLicenseType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceUsageType">resetInstanceUsageType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetUpgradeSchedule">resetUpgradeSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetWafPrimaryDomain">resetWafPrimaryDomain</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.putTimeouts"></a>

```java
public void putTimeouts(OceOceInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a>

---

##### `resetAddOnFeatures` <a name="resetAddOnFeatures" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetAddOnFeatures"></a>

```java
public void resetAddOnFeatures()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDrRegion` <a name="resetDrRegion" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDrRegion"></a>

```java
public void resetDrRegion()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceAccessType` <a name="resetInstanceAccessType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceAccessType"></a>

```java
public void resetInstanceAccessType()
```

##### `resetInstanceLicenseType` <a name="resetInstanceLicenseType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceLicenseType"></a>

```java
public void resetInstanceLicenseType()
```

##### `resetInstanceUsageType` <a name="resetInstanceUsageType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceUsageType"></a>

```java
public void resetInstanceUsageType()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUpgradeSchedule` <a name="resetUpgradeSchedule" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetUpgradeSchedule"></a>

```java
public void resetUpgradeSchedule()
```

##### `resetWafPrimaryDomain` <a name="resetWafPrimaryDomain" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetWafPrimaryDomain"></a>

```java
public void resetWafPrimaryDomain()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OceOceInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.oce_oce_instance.OceOceInstance;

OceOceInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.oce_oce_instance.OceOceInstance;

OceOceInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.oce_oce_instance.OceOceInstance;

OceOceInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.oce_oce_instance.OceOceInstance;

OceOceInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OceOceInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OceOceInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OceOceInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OceOceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OceOceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.guid">guid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsTenancy">idcsTenancy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.service">service</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference">OceOceInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.addOnFeaturesInput">addOnFeaturesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.adminEmailInput">adminEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.drRegionInput">drRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsAccessTokenInput">idcsAccessTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceAccessTypeInput">instanceAccessTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceLicenseTypeInput">instanceLicenseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceUsageTypeInput">instanceUsageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.objectStorageNamespaceInput">objectStorageNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyIdInput">tenancyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyNameInput">tenancyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.upgradeScheduleInput">upgradeScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.wafPrimaryDomainInput">wafPrimaryDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.addOnFeatures">addOnFeatures</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.adminEmail">adminEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.drRegion">drRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsAccessToken">idcsAccessToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceAccessType">instanceAccessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceLicenseType">instanceLicenseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceUsageType">instanceUsageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.objectStorageNamespace">objectStorageNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyId">tenancyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyName">tenancyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.upgradeSchedule">upgradeSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.wafPrimaryDomain">wafPrimaryDomain</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `guid`<sup>Required</sup> <a name="guid" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.guid"></a>

```java
public java.lang.String getGuid();
```

- *Type:* java.lang.String

---

##### `idcsTenancy`<sup>Required</sup> <a name="idcsTenancy" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsTenancy"></a>

```java
public java.lang.String getIdcsTenancy();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.service"></a>

```java
public StringMap getService();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeouts"></a>

```java
public OceOceInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference">OceOceInstanceTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `addOnFeaturesInput`<sup>Optional</sup> <a name="addOnFeaturesInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.addOnFeaturesInput"></a>

```java
public java.util.List<java.lang.String> getAddOnFeaturesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `adminEmailInput`<sup>Optional</sup> <a name="adminEmailInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.adminEmailInput"></a>

```java
public java.lang.String getAdminEmailInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `drRegionInput`<sup>Optional</sup> <a name="drRegionInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.drRegionInput"></a>

```java
public java.lang.String getDrRegionInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idcsAccessTokenInput`<sup>Optional</sup> <a name="idcsAccessTokenInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsAccessTokenInput"></a>

```java
public java.lang.String getIdcsAccessTokenInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceAccessTypeInput`<sup>Optional</sup> <a name="instanceAccessTypeInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceAccessTypeInput"></a>

```java
public java.lang.String getInstanceAccessTypeInput();
```

- *Type:* java.lang.String

---

##### `instanceLicenseTypeInput`<sup>Optional</sup> <a name="instanceLicenseTypeInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceLicenseTypeInput"></a>

```java
public java.lang.String getInstanceLicenseTypeInput();
```

- *Type:* java.lang.String

---

##### `instanceUsageTypeInput`<sup>Optional</sup> <a name="instanceUsageTypeInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceUsageTypeInput"></a>

```java
public java.lang.String getInstanceUsageTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `objectStorageNamespaceInput`<sup>Optional</sup> <a name="objectStorageNamespaceInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.objectStorageNamespaceInput"></a>

```java
public java.lang.String getObjectStorageNamespaceInput();
```

- *Type:* java.lang.String

---

##### `tenancyIdInput`<sup>Optional</sup> <a name="tenancyIdInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyIdInput"></a>

```java
public java.lang.String getTenancyIdInput();
```

- *Type:* java.lang.String

---

##### `tenancyNameInput`<sup>Optional</sup> <a name="tenancyNameInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyNameInput"></a>

```java
public java.lang.String getTenancyNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a>

---

##### `upgradeScheduleInput`<sup>Optional</sup> <a name="upgradeScheduleInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.upgradeScheduleInput"></a>

```java
public java.lang.String getUpgradeScheduleInput();
```

- *Type:* java.lang.String

---

##### `wafPrimaryDomainInput`<sup>Optional</sup> <a name="wafPrimaryDomainInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.wafPrimaryDomainInput"></a>

```java
public java.lang.String getWafPrimaryDomainInput();
```

- *Type:* java.lang.String

---

##### `addOnFeatures`<sup>Required</sup> <a name="addOnFeatures" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.addOnFeatures"></a>

```java
public java.util.List<java.lang.String> getAddOnFeatures();
```

- *Type:* java.util.List<java.lang.String>

---

##### `adminEmail`<sup>Required</sup> <a name="adminEmail" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.adminEmail"></a>

```java
public java.lang.String getAdminEmail();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `drRegion`<sup>Required</sup> <a name="drRegion" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.drRegion"></a>

```java
public java.lang.String getDrRegion();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsAccessToken`<sup>Required</sup> <a name="idcsAccessToken" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsAccessToken"></a>

```java
public java.lang.String getIdcsAccessToken();
```

- *Type:* java.lang.String

---

##### `instanceAccessType`<sup>Required</sup> <a name="instanceAccessType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceAccessType"></a>

```java
public java.lang.String getInstanceAccessType();
```

- *Type:* java.lang.String

---

##### `instanceLicenseType`<sup>Required</sup> <a name="instanceLicenseType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceLicenseType"></a>

```java
public java.lang.String getInstanceLicenseType();
```

- *Type:* java.lang.String

---

##### `instanceUsageType`<sup>Required</sup> <a name="instanceUsageType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceUsageType"></a>

```java
public java.lang.String getInstanceUsageType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `objectStorageNamespace`<sup>Required</sup> <a name="objectStorageNamespace" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.objectStorageNamespace"></a>

```java
public java.lang.String getObjectStorageNamespace();
```

- *Type:* java.lang.String

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyId"></a>

```java
public java.lang.String getTenancyId();
```

- *Type:* java.lang.String

---

##### `tenancyName`<sup>Required</sup> <a name="tenancyName" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyName"></a>

```java
public java.lang.String getTenancyName();
```

- *Type:* java.lang.String

---

##### `upgradeSchedule`<sup>Required</sup> <a name="upgradeSchedule" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.upgradeSchedule"></a>

```java
public java.lang.String getUpgradeSchedule();
```

- *Type:* java.lang.String

---

##### `wafPrimaryDomain`<sup>Required</sup> <a name="wafPrimaryDomain" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.wafPrimaryDomain"></a>

```java
public java.lang.String getWafPrimaryDomain();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OceOceInstanceConfig <a name="OceOceInstanceConfig" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.oce_oce_instance.OceOceInstanceConfig;

OceOceInstanceConfig.builder()
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
    .adminEmail(java.lang.String)
    .compartmentId(java.lang.String)
    .idcsAccessToken(java.lang.String)
    .name(java.lang.String)
    .objectStorageNamespace(java.lang.String)
    .tenancyId(java.lang.String)
    .tenancyName(java.lang.String)
//  .addOnFeatures(java.util.List<java.lang.String>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .drRegion(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .instanceAccessType(java.lang.String)
//  .instanceLicenseType(java.lang.String)
//  .instanceUsageType(java.lang.String)
//  .timeouts(OceOceInstanceTimeouts)
//  .upgradeSchedule(java.lang.String)
//  .wafPrimaryDomain(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.adminEmail">adminEmail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#admin_email OceOceInstance#admin_email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#compartment_id OceOceInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.idcsAccessToken">idcsAccessToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#idcs_access_token OceOceInstance#idcs_access_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#name OceOceInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.objectStorageNamespace">objectStorageNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#object_storage_namespace OceOceInstance#object_storage_namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.tenancyId">tenancyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_id OceOceInstance#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.tenancyName">tenancyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_name OceOceInstance#tenancy_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.addOnFeatures">addOnFeatures</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#add_on_features OceOceInstance#add_on_features}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#defined_tags OceOceInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#description OceOceInstance#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.drRegion">drRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#dr_region OceOceInstance#dr_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#freeform_tags OceOceInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#id OceOceInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceAccessType">instanceAccessType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_access_type OceOceInstance#instance_access_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceLicenseType">instanceLicenseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_license_type OceOceInstance#instance_license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceUsageType">instanceUsageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_usage_type OceOceInstance#instance_usage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.upgradeSchedule">upgradeSchedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#upgrade_schedule OceOceInstance#upgrade_schedule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.wafPrimaryDomain">wafPrimaryDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#waf_primary_domain OceOceInstance#waf_primary_domain}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminEmail`<sup>Required</sup> <a name="adminEmail" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.adminEmail"></a>

```java
public java.lang.String getAdminEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#admin_email OceOceInstance#admin_email}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#compartment_id OceOceInstance#compartment_id}.

---

##### `idcsAccessToken`<sup>Required</sup> <a name="idcsAccessToken" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.idcsAccessToken"></a>

```java
public java.lang.String getIdcsAccessToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#idcs_access_token OceOceInstance#idcs_access_token}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#name OceOceInstance#name}.

---

##### `objectStorageNamespace`<sup>Required</sup> <a name="objectStorageNamespace" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.objectStorageNamespace"></a>

```java
public java.lang.String getObjectStorageNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#object_storage_namespace OceOceInstance#object_storage_namespace}.

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.tenancyId"></a>

```java
public java.lang.String getTenancyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_id OceOceInstance#tenancy_id}.

---

##### `tenancyName`<sup>Required</sup> <a name="tenancyName" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.tenancyName"></a>

```java
public java.lang.String getTenancyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_name OceOceInstance#tenancy_name}.

---

##### `addOnFeatures`<sup>Optional</sup> <a name="addOnFeatures" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.addOnFeatures"></a>

```java
public java.util.List<java.lang.String> getAddOnFeatures();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#add_on_features OceOceInstance#add_on_features}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#defined_tags OceOceInstance#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#description OceOceInstance#description}.

---

##### `drRegion`<sup>Optional</sup> <a name="drRegion" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.drRegion"></a>

```java
public java.lang.String getDrRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#dr_region OceOceInstance#dr_region}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#freeform_tags OceOceInstance#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#id OceOceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceAccessType`<sup>Optional</sup> <a name="instanceAccessType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceAccessType"></a>

```java
public java.lang.String getInstanceAccessType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_access_type OceOceInstance#instance_access_type}.

---

##### `instanceLicenseType`<sup>Optional</sup> <a name="instanceLicenseType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceLicenseType"></a>

```java
public java.lang.String getInstanceLicenseType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_license_type OceOceInstance#instance_license_type}.

---

##### `instanceUsageType`<sup>Optional</sup> <a name="instanceUsageType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceUsageType"></a>

```java
public java.lang.String getInstanceUsageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_usage_type OceOceInstance#instance_usage_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.timeouts"></a>

```java
public OceOceInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#timeouts OceOceInstance#timeouts}

---

##### `upgradeSchedule`<sup>Optional</sup> <a name="upgradeSchedule" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.upgradeSchedule"></a>

```java
public java.lang.String getUpgradeSchedule();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#upgrade_schedule OceOceInstance#upgrade_schedule}.

---

##### `wafPrimaryDomain`<sup>Optional</sup> <a name="wafPrimaryDomain" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.wafPrimaryDomain"></a>

```java
public java.lang.String getWafPrimaryDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#waf_primary_domain OceOceInstance#waf_primary_domain}.

---

### OceOceInstanceTimeouts <a name="OceOceInstanceTimeouts" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.oce_oce_instance.OceOceInstanceTimeouts;

OceOceInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#create OceOceInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#delete OceOceInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#update OceOceInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#create OceOceInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#delete OceOceInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#update OceOceInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceOceInstanceTimeoutsOutputReference <a name="OceOceInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.oce_oce_instance.OceOceInstanceTimeoutsOutputReference;

new OceOceInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a>

---



