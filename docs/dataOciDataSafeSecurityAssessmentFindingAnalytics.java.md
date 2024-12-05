# `dataOciDataSafeSecurityAssessmentFindingAnalytics` Submodule <a name="`dataOciDataSafeSecurityAssessmentFindingAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityAssessmentFindingAnalytics <a name="DataOciDataSafeSecurityAssessmentFindingAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics oci_data_safe_security_assessment_finding_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_finding_analytics.DataOciDataSafeSecurityAssessmentFindingAnalytics;

DataOciDataSafeSecurityAssessmentFindingAnalytics.Builder.create(Construct scope, java.lang.String id)
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
//  .accessLevel(java.lang.String)
//  .compartmentIdInSubtree(java.lang.Boolean)
//  .compartmentIdInSubtree(IResolvable)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter>)
//  .findingKey(java.lang.String)
//  .groupBy(java.lang.String)
//  .id(java.lang.String)
//  .isTopFinding(java.lang.Boolean)
//  .isTopFinding(IResolvable)
//  .severity(java.lang.String)
//  .topFindingStatus(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#compartment_id DataOciDataSafeSecurityAssessmentFindingAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#access_level DataOciDataSafeSecurityAssessmentFindingAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentFindingAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.findingKey">findingKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#finding_key DataOciDataSafeSecurityAssessmentFindingAnalytics#finding_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.groupBy">groupBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#group_by DataOciDataSafeSecurityAssessmentFindingAnalytics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#id DataOciDataSafeSecurityAssessmentFindingAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.isTopFinding">isTopFinding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#is_top_finding DataOciDataSafeSecurityAssessmentFindingAnalytics#is_top_finding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.severity">severity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#severity DataOciDataSafeSecurityAssessmentFindingAnalytics#severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.topFindingStatus">topFindingStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#top_finding_status DataOciDataSafeSecurityAssessmentFindingAnalytics#top_finding_status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#compartment_id DataOciDataSafeSecurityAssessmentFindingAnalytics#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.accessLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#access_level DataOciDataSafeSecurityAssessmentFindingAnalytics#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentFindingAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#filter DataOciDataSafeSecurityAssessmentFindingAnalytics#filter}

---

##### `findingKey`<sup>Optional</sup> <a name="findingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.findingKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#finding_key DataOciDataSafeSecurityAssessmentFindingAnalytics#finding_key}.

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.groupBy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#group_by DataOciDataSafeSecurityAssessmentFindingAnalytics#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#id DataOciDataSafeSecurityAssessmentFindingAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isTopFinding`<sup>Optional</sup> <a name="isTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.isTopFinding"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#is_top_finding DataOciDataSafeSecurityAssessmentFindingAnalytics#is_top_finding}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.severity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#severity DataOciDataSafeSecurityAssessmentFindingAnalytics#severity}.

---

##### `topFindingStatus`<sup>Optional</sup> <a name="topFindingStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.Initializer.parameter.topFindingStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#top_finding_status DataOciDataSafeSecurityAssessmentFindingAnalytics#top_finding_status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetFindingKey">resetFindingKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetIsTopFinding">resetIsTopFinding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetTopFindingStatus">resetTopFindingStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter</a>>

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetCompartmentIdInSubtree"></a>

```java
public void resetCompartmentIdInSubtree()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetFindingKey` <a name="resetFindingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetFindingKey"></a>

```java
public void resetFindingKey()
```

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetGroupBy"></a>

```java
public void resetGroupBy()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetId"></a>

```java
public void resetId()
```

##### `resetIsTopFinding` <a name="resetIsTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetIsTopFinding"></a>

```java
public void resetIsTopFinding()
```

##### `resetSeverity` <a name="resetSeverity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetSeverity"></a>

```java
public void resetSeverity()
```

##### `resetTopFindingStatus` <a name="resetTopFindingStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.resetTopFindingStatus"></a>

```java
public void resetTopFindingStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentFindingAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_finding_analytics.DataOciDataSafeSecurityAssessmentFindingAnalytics;

DataOciDataSafeSecurityAssessmentFindingAnalytics.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_finding_analytics.DataOciDataSafeSecurityAssessmentFindingAnalytics;

DataOciDataSafeSecurityAssessmentFindingAnalytics.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_finding_analytics.DataOciDataSafeSecurityAssessmentFindingAnalytics;

DataOciDataSafeSecurityAssessmentFindingAnalytics.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_finding_analytics.DataOciDataSafeSecurityAssessmentFindingAnalytics;

DataOciDataSafeSecurityAssessmentFindingAnalytics.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDataSafeSecurityAssessmentFindingAnalytics.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityAssessmentFindingAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDataSafeSecurityAssessmentFindingAnalytics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDataSafeSecurityAssessmentFindingAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityAssessmentFindingAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.findingAnalyticsCollection">findingAnalyticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.findingKeyInput">findingKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.groupByInput">groupByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.isTopFindingInput">isTopFindingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.topFindingStatusInput">topFindingStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.findingKey">findingKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.groupBy">groupBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.isTopFinding">isTopFinding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.topFindingStatus">topFindingStatus</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.filter"></a>

```java
public DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList</a>

---

##### `findingAnalyticsCollection`<sup>Required</sup> <a name="findingAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.findingAnalyticsCollection"></a>

```java
public DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList getFindingAnalyticsCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.compartmentIdInSubtreeInput"></a>

```java
public java.lang.Object getCompartmentIdInSubtreeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter</a>>

---

##### `findingKeyInput`<sup>Optional</sup> <a name="findingKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.findingKeyInput"></a>

```java
public java.lang.String getFindingKeyInput();
```

- *Type:* java.lang.String

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.groupByInput"></a>

```java
public java.lang.String getGroupByInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isTopFindingInput`<sup>Optional</sup> <a name="isTopFindingInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.isTopFindingInput"></a>

```java
public java.lang.Object getIsTopFindingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `topFindingStatusInput`<sup>Optional</sup> <a name="topFindingStatusInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.topFindingStatusInput"></a>

```java
public java.lang.String getTopFindingStatusInput();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `findingKey`<sup>Required</sup> <a name="findingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.findingKey"></a>

```java
public java.lang.String getFindingKey();
```

- *Type:* java.lang.String

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.groupBy"></a>

```java
public java.lang.String getGroupBy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isTopFinding`<sup>Required</sup> <a name="isTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.isTopFinding"></a>

```java
public java.lang.Object getIsTopFinding();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `topFindingStatus`<sup>Required</sup> <a name="topFindingStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.topFindingStatus"></a>

```java
public java.lang.String getTopFindingStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalytics.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_finding_analytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig;

DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.builder()
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
//  .accessLevel(java.lang.String)
//  .compartmentIdInSubtree(java.lang.Boolean)
//  .compartmentIdInSubtree(IResolvable)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter>)
//  .findingKey(java.lang.String)
//  .groupBy(java.lang.String)
//  .id(java.lang.String)
//  .isTopFinding(java.lang.Boolean)
//  .isTopFinding(IResolvable)
//  .severity(java.lang.String)
//  .topFindingStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#compartment_id DataOciDataSafeSecurityAssessmentFindingAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#access_level DataOciDataSafeSecurityAssessmentFindingAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentFindingAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.findingKey">findingKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#finding_key DataOciDataSafeSecurityAssessmentFindingAnalytics#finding_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.groupBy">groupBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#group_by DataOciDataSafeSecurityAssessmentFindingAnalytics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#id DataOciDataSafeSecurityAssessmentFindingAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.isTopFinding">isTopFinding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#is_top_finding DataOciDataSafeSecurityAssessmentFindingAnalytics#is_top_finding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.severity">severity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#severity DataOciDataSafeSecurityAssessmentFindingAnalytics#severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.topFindingStatus">topFindingStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#top_finding_status DataOciDataSafeSecurityAssessmentFindingAnalytics#top_finding_status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#compartment_id DataOciDataSafeSecurityAssessmentFindingAnalytics#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#access_level DataOciDataSafeSecurityAssessmentFindingAnalytics#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#compartment_id_in_subtree DataOciDataSafeSecurityAssessmentFindingAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#filter DataOciDataSafeSecurityAssessmentFindingAnalytics#filter}

---

##### `findingKey`<sup>Optional</sup> <a name="findingKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.findingKey"></a>

```java
public java.lang.String getFindingKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#finding_key DataOciDataSafeSecurityAssessmentFindingAnalytics#finding_key}.

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.groupBy"></a>

```java
public java.lang.String getGroupBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#group_by DataOciDataSafeSecurityAssessmentFindingAnalytics#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#id DataOciDataSafeSecurityAssessmentFindingAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isTopFinding`<sup>Optional</sup> <a name="isTopFinding" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.isTopFinding"></a>

```java
public java.lang.Object getIsTopFinding();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#is_top_finding DataOciDataSafeSecurityAssessmentFindingAnalytics#is_top_finding}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#severity DataOciDataSafeSecurityAssessmentFindingAnalytics#severity}.

---

##### `topFindingStatus`<sup>Optional</sup> <a name="topFindingStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsConfig.property.topFindingStatus"></a>

```java
public java.lang.String getTopFindingStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#top_finding_status DataOciDataSafeSecurityAssessmentFindingAnalytics#top_finding_status}.

---

### DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_finding_analytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter;

DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#name DataOciDataSafeSecurityAssessmentFindingAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#values DataOciDataSafeSecurityAssessmentFindingAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#regex DataOciDataSafeSecurityAssessmentFindingAnalytics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#name DataOciDataSafeSecurityAssessmentFindingAnalytics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#values DataOciDataSafeSecurityAssessmentFindingAnalytics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment_finding_analytics#regex DataOciDataSafeSecurityAssessmentFindingAnalytics#regex}.

---

### DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollection <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_finding_analytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollection;

DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollection.builder()
    .build();
```


### DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItems <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_finding_analytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItems;

DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItems.builder()
    .build();
```


### DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensions <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_finding_analytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensions;

DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensions.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_finding_analytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList;

new DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.get"></a>

```java
public DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter</a>>

---


### DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_finding_analytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference;

new DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter">DataOciDataSafeSecurityAssessmentFindingAnalyticsFilter</a>

---


### DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_finding_analytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList;

new DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.get"></a>

```java
public DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_finding_analytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference;

new DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.topFindingCategory">topFindingCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.topFindingStatus">topFindingStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensions">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `topFindingCategory`<sup>Required</sup> <a name="topFindingCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.topFindingCategory"></a>

```java
public java.lang.String getTopFindingCategory();
```

- *Type:* java.lang.String

---

##### `topFindingStatus`<sup>Required</sup> <a name="topFindingStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.topFindingStatus"></a>

```java
public java.lang.String getTopFindingStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensions">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensions</a>

---


### DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_finding_analytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList;

new DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.get"></a>

```java
public DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_finding_analytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference;

new DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.securityAssessmentFindingAnalyticCount">securityAssessmentFindingAnalyticCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItems">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.dimensions"></a>

```java
public DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList getDimensions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsDimensionsList</a>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `securityAssessmentFindingAnalyticCount`<sup>Required</sup> <a name="securityAssessmentFindingAnalyticCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.securityAssessmentFindingAnalyticCount"></a>

```java
public java.lang.String getSecurityAssessmentFindingAnalyticCount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItems">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItems</a>

---


### DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_finding_analytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList;

new DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.get"></a>

```java
public DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference <a name="DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_security_assessment_finding_analytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference;

new DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollection">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.property.items"></a>

```java
public DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessmentFindingAnalytics.DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollection">DataOciDataSafeSecurityAssessmentFindingAnalyticsFindingAnalyticsCollection</a>

---



