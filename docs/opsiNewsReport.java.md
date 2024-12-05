# `opsiNewsReport` Submodule <a name="`opsiNewsReport` Submodule" id="rhizo-co-terraform-provider-oci.opsiNewsReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiNewsReport <a name="OpsiNewsReport" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report oci_opsi_news_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_news_report.OpsiNewsReport;

OpsiNewsReport.Builder.create(Construct scope, java.lang.String id)
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
    .contentTypes(OpsiNewsReportContentTypes)
    .description(java.lang.String)
    .locale(java.lang.String)
    .name(java.lang.String)
    .newsFrequency(java.lang.String)
    .onsTopicId(java.lang.String)
//  .areChildCompartmentsIncluded(java.lang.Boolean)
//  .areChildCompartmentsIncluded(IResolvable)
//  .dayOfWeek(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .status(java.lang.String)
//  .timeouts(OpsiNewsReportTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#compartment_id OpsiNewsReport#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.contentTypes">contentTypes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a></code> | content_types block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#description OpsiNewsReport#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.locale">locale</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#locale OpsiNewsReport#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#name OpsiNewsReport#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.newsFrequency">newsFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#news_frequency OpsiNewsReport#news_frequency}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.onsTopicId">onsTopicId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#ons_topic_id OpsiNewsReport#ons_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.areChildCompartmentsIncluded">areChildCompartmentsIncluded</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#are_child_compartments_included OpsiNewsReport#are_child_compartments_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#day_of_week OpsiNewsReport#day_of_week}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#defined_tags OpsiNewsReport#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#freeform_tags OpsiNewsReport#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#id OpsiNewsReport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#status OpsiNewsReport#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#compartment_id OpsiNewsReport#compartment_id}.

---

##### `contentTypes`<sup>Required</sup> <a name="contentTypes" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.contentTypes"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a>

content_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#content_types OpsiNewsReport#content_types}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#description OpsiNewsReport#description}.

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.locale"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#locale OpsiNewsReport#locale}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#name OpsiNewsReport#name}.

---

##### `newsFrequency`<sup>Required</sup> <a name="newsFrequency" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.newsFrequency"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#news_frequency OpsiNewsReport#news_frequency}.

---

##### `onsTopicId`<sup>Required</sup> <a name="onsTopicId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.onsTopicId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#ons_topic_id OpsiNewsReport#ons_topic_id}.

---

##### `areChildCompartmentsIncluded`<sup>Optional</sup> <a name="areChildCompartmentsIncluded" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.areChildCompartmentsIncluded"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#are_child_compartments_included OpsiNewsReport#are_child_compartments_included}.

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.dayOfWeek"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#day_of_week OpsiNewsReport#day_of_week}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#defined_tags OpsiNewsReport#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#freeform_tags OpsiNewsReport#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#id OpsiNewsReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#status OpsiNewsReport#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#timeouts OpsiNewsReport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putContentTypes">putContentTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetAreChildCompartmentsIncluded">resetAreChildCompartmentsIncluded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContentTypes` <a name="putContentTypes" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putContentTypes"></a>

```java
public void putContentTypes(OpsiNewsReportContentTypes value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putContentTypes.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putTimeouts"></a>

```java
public void putTimeouts(OpsiNewsReportTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a>

---

##### `resetAreChildCompartmentsIncluded` <a name="resetAreChildCompartmentsIncluded" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetAreChildCompartmentsIncluded"></a>

```java
public void resetAreChildCompartmentsIncluded()
```

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetDayOfWeek"></a>

```java
public void resetDayOfWeek()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetId"></a>

```java
public void resetId()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiNewsReport resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_news_report.OpsiNewsReport;

OpsiNewsReport.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_news_report.OpsiNewsReport;

OpsiNewsReport.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_news_report.OpsiNewsReport;

OpsiNewsReport.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_news_report.OpsiNewsReport;

OpsiNewsReport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpsiNewsReport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OpsiNewsReport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpsiNewsReport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpsiNewsReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OpsiNewsReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.contentTypes">contentTypes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference">OpsiNewsReportContentTypesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference">OpsiNewsReportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.areChildCompartmentsIncludedInput">areChildCompartmentsIncludedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.contentTypesInput">contentTypesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.localeInput">localeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.newsFrequencyInput">newsFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.onsTopicIdInput">onsTopicIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.areChildCompartmentsIncluded">areChildCompartmentsIncluded</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.newsFrequency">newsFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.onsTopicId">onsTopicId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contentTypes`<sup>Required</sup> <a name="contentTypes" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.contentTypes"></a>

```java
public OpsiNewsReportContentTypesOutputReference getContentTypes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference">OpsiNewsReportContentTypesOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeouts"></a>

```java
public OpsiNewsReportTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference">OpsiNewsReportTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `areChildCompartmentsIncludedInput`<sup>Optional</sup> <a name="areChildCompartmentsIncludedInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.areChildCompartmentsIncludedInput"></a>

```java
public java.lang.Object getAreChildCompartmentsIncludedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `contentTypesInput`<sup>Optional</sup> <a name="contentTypesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.contentTypesInput"></a>

```java
public OpsiNewsReportContentTypes getContentTypesInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a>

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.localeInput"></a>

```java
public java.lang.String getLocaleInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `newsFrequencyInput`<sup>Optional</sup> <a name="newsFrequencyInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.newsFrequencyInput"></a>

```java
public java.lang.String getNewsFrequencyInput();
```

- *Type:* java.lang.String

---

##### `onsTopicIdInput`<sup>Optional</sup> <a name="onsTopicIdInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.onsTopicIdInput"></a>

```java
public java.lang.String getOnsTopicIdInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a>

---

##### `areChildCompartmentsIncluded`<sup>Required</sup> <a name="areChildCompartmentsIncluded" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.areChildCompartmentsIncluded"></a>

```java
public java.lang.Object getAreChildCompartmentsIncluded();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `newsFrequency`<sup>Required</sup> <a name="newsFrequency" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.newsFrequency"></a>

```java
public java.lang.String getNewsFrequency();
```

- *Type:* java.lang.String

---

##### `onsTopicId`<sup>Required</sup> <a name="onsTopicId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.onsTopicId"></a>

```java
public java.lang.String getOnsTopicId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReport.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiNewsReportConfig <a name="OpsiNewsReportConfig" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_news_report.OpsiNewsReportConfig;

OpsiNewsReportConfig.builder()
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
    .contentTypes(OpsiNewsReportContentTypes)
    .description(java.lang.String)
    .locale(java.lang.String)
    .name(java.lang.String)
    .newsFrequency(java.lang.String)
    .onsTopicId(java.lang.String)
//  .areChildCompartmentsIncluded(java.lang.Boolean)
//  .areChildCompartmentsIncluded(IResolvable)
//  .dayOfWeek(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .status(java.lang.String)
//  .timeouts(OpsiNewsReportTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#compartment_id OpsiNewsReport#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.contentTypes">contentTypes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a></code> | content_types block. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#description OpsiNewsReport#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.locale">locale</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#locale OpsiNewsReport#locale}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#name OpsiNewsReport#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.newsFrequency">newsFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#news_frequency OpsiNewsReport#news_frequency}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.onsTopicId">onsTopicId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#ons_topic_id OpsiNewsReport#ons_topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.areChildCompartmentsIncluded">areChildCompartmentsIncluded</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#are_child_compartments_included OpsiNewsReport#are_child_compartments_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#day_of_week OpsiNewsReport#day_of_week}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#defined_tags OpsiNewsReport#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#freeform_tags OpsiNewsReport#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#id OpsiNewsReport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#status OpsiNewsReport#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#compartment_id OpsiNewsReport#compartment_id}.

---

##### `contentTypes`<sup>Required</sup> <a name="contentTypes" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.contentTypes"></a>

```java
public OpsiNewsReportContentTypes getContentTypes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a>

content_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#content_types OpsiNewsReport#content_types}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#description OpsiNewsReport#description}.

---

##### `locale`<sup>Required</sup> <a name="locale" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#locale OpsiNewsReport#locale}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#name OpsiNewsReport#name}.

---

##### `newsFrequency`<sup>Required</sup> <a name="newsFrequency" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.newsFrequency"></a>

```java
public java.lang.String getNewsFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#news_frequency OpsiNewsReport#news_frequency}.

---

##### `onsTopicId`<sup>Required</sup> <a name="onsTopicId" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.onsTopicId"></a>

```java
public java.lang.String getOnsTopicId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#ons_topic_id OpsiNewsReport#ons_topic_id}.

---

##### `areChildCompartmentsIncluded`<sup>Optional</sup> <a name="areChildCompartmentsIncluded" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.areChildCompartmentsIncluded"></a>

```java
public java.lang.Object getAreChildCompartmentsIncluded();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#are_child_compartments_included OpsiNewsReport#are_child_compartments_included}.

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#day_of_week OpsiNewsReport#day_of_week}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#defined_tags OpsiNewsReport#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#freeform_tags OpsiNewsReport#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#id OpsiNewsReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#status OpsiNewsReport#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportConfig.property.timeouts"></a>

```java
public OpsiNewsReportTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#timeouts OpsiNewsReport#timeouts}

---

### OpsiNewsReportContentTypes <a name="OpsiNewsReportContentTypes" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_news_report.OpsiNewsReportContentTypes;

OpsiNewsReportContentTypes.builder()
//  .capacityPlanningResources(java.util.List<java.lang.String>)
//  .sqlInsightsFleetAnalysisResources(java.util.List<java.lang.String>)
//  .sqlInsightsPerformanceDegradationResources(java.util.List<java.lang.String>)
//  .sqlInsightsPlanChangesResources(java.util.List<java.lang.String>)
//  .sqlInsightsTopDatabasesResources(java.util.List<java.lang.String>)
//  .sqlInsightsTopSqlByInsightsResources(java.util.List<java.lang.String>)
//  .sqlInsightsTopSqlResources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.capacityPlanningResources">capacityPlanningResources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#capacity_planning_resources OpsiNewsReport#capacity_planning_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsFleetAnalysisResources">sqlInsightsFleetAnalysisResources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_fleet_analysis_resources OpsiNewsReport#sql_insights_fleet_analysis_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsPerformanceDegradationResources">sqlInsightsPerformanceDegradationResources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_performance_degradation_resources OpsiNewsReport#sql_insights_performance_degradation_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsPlanChangesResources">sqlInsightsPlanChangesResources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_plan_changes_resources OpsiNewsReport#sql_insights_plan_changes_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopDatabasesResources">sqlInsightsTopDatabasesResources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_databases_resources OpsiNewsReport#sql_insights_top_databases_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopSqlByInsightsResources">sqlInsightsTopSqlByInsightsResources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_sql_by_insights_resources OpsiNewsReport#sql_insights_top_sql_by_insights_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopSqlResources">sqlInsightsTopSqlResources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_sql_resources OpsiNewsReport#sql_insights_top_sql_resources}. |

---

##### `capacityPlanningResources`<sup>Optional</sup> <a name="capacityPlanningResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.capacityPlanningResources"></a>

```java
public java.util.List<java.lang.String> getCapacityPlanningResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#capacity_planning_resources OpsiNewsReport#capacity_planning_resources}.

---

##### `sqlInsightsFleetAnalysisResources`<sup>Optional</sup> <a name="sqlInsightsFleetAnalysisResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsFleetAnalysisResources"></a>

```java
public java.util.List<java.lang.String> getSqlInsightsFleetAnalysisResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_fleet_analysis_resources OpsiNewsReport#sql_insights_fleet_analysis_resources}.

---

##### `sqlInsightsPerformanceDegradationResources`<sup>Optional</sup> <a name="sqlInsightsPerformanceDegradationResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsPerformanceDegradationResources"></a>

```java
public java.util.List<java.lang.String> getSqlInsightsPerformanceDegradationResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_performance_degradation_resources OpsiNewsReport#sql_insights_performance_degradation_resources}.

---

##### `sqlInsightsPlanChangesResources`<sup>Optional</sup> <a name="sqlInsightsPlanChangesResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsPlanChangesResources"></a>

```java
public java.util.List<java.lang.String> getSqlInsightsPlanChangesResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_plan_changes_resources OpsiNewsReport#sql_insights_plan_changes_resources}.

---

##### `sqlInsightsTopDatabasesResources`<sup>Optional</sup> <a name="sqlInsightsTopDatabasesResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopDatabasesResources"></a>

```java
public java.util.List<java.lang.String> getSqlInsightsTopDatabasesResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_databases_resources OpsiNewsReport#sql_insights_top_databases_resources}.

---

##### `sqlInsightsTopSqlByInsightsResources`<sup>Optional</sup> <a name="sqlInsightsTopSqlByInsightsResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopSqlByInsightsResources"></a>

```java
public java.util.List<java.lang.String> getSqlInsightsTopSqlByInsightsResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_sql_by_insights_resources OpsiNewsReport#sql_insights_top_sql_by_insights_resources}.

---

##### `sqlInsightsTopSqlResources`<sup>Optional</sup> <a name="sqlInsightsTopSqlResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes.property.sqlInsightsTopSqlResources"></a>

```java
public java.util.List<java.lang.String> getSqlInsightsTopSqlResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#sql_insights_top_sql_resources OpsiNewsReport#sql_insights_top_sql_resources}.

---

### OpsiNewsReportTimeouts <a name="OpsiNewsReportTimeouts" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_news_report.OpsiNewsReportTimeouts;

OpsiNewsReportTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#create OpsiNewsReport#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#delete OpsiNewsReport#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#update OpsiNewsReport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#create OpsiNewsReport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#delete OpsiNewsReport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_news_report#update OpsiNewsReport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiNewsReportContentTypesOutputReference <a name="OpsiNewsReportContentTypesOutputReference" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_news_report.OpsiNewsReportContentTypesOutputReference;

new OpsiNewsReportContentTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetCapacityPlanningResources">resetCapacityPlanningResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsFleetAnalysisResources">resetSqlInsightsFleetAnalysisResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsPerformanceDegradationResources">resetSqlInsightsPerformanceDegradationResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsPlanChangesResources">resetSqlInsightsPlanChangesResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopDatabasesResources">resetSqlInsightsTopDatabasesResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopSqlByInsightsResources">resetSqlInsightsTopSqlByInsightsResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopSqlResources">resetSqlInsightsTopSqlResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCapacityPlanningResources` <a name="resetCapacityPlanningResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetCapacityPlanningResources"></a>

```java
public void resetCapacityPlanningResources()
```

##### `resetSqlInsightsFleetAnalysisResources` <a name="resetSqlInsightsFleetAnalysisResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsFleetAnalysisResources"></a>

```java
public void resetSqlInsightsFleetAnalysisResources()
```

##### `resetSqlInsightsPerformanceDegradationResources` <a name="resetSqlInsightsPerformanceDegradationResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsPerformanceDegradationResources"></a>

```java
public void resetSqlInsightsPerformanceDegradationResources()
```

##### `resetSqlInsightsPlanChangesResources` <a name="resetSqlInsightsPlanChangesResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsPlanChangesResources"></a>

```java
public void resetSqlInsightsPlanChangesResources()
```

##### `resetSqlInsightsTopDatabasesResources` <a name="resetSqlInsightsTopDatabasesResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopDatabasesResources"></a>

```java
public void resetSqlInsightsTopDatabasesResources()
```

##### `resetSqlInsightsTopSqlByInsightsResources` <a name="resetSqlInsightsTopSqlByInsightsResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopSqlByInsightsResources"></a>

```java
public void resetSqlInsightsTopSqlByInsightsResources()
```

##### `resetSqlInsightsTopSqlResources` <a name="resetSqlInsightsTopSqlResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.resetSqlInsightsTopSqlResources"></a>

```java
public void resetSqlInsightsTopSqlResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.capacityPlanningResourcesInput">capacityPlanningResourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsFleetAnalysisResourcesInput">sqlInsightsFleetAnalysisResourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPerformanceDegradationResourcesInput">sqlInsightsPerformanceDegradationResourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPlanChangesResourcesInput">sqlInsightsPlanChangesResourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopDatabasesResourcesInput">sqlInsightsTopDatabasesResourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlByInsightsResourcesInput">sqlInsightsTopSqlByInsightsResourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlResourcesInput">sqlInsightsTopSqlResourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.capacityPlanningResources">capacityPlanningResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsFleetAnalysisResources">sqlInsightsFleetAnalysisResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPerformanceDegradationResources">sqlInsightsPerformanceDegradationResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPlanChangesResources">sqlInsightsPlanChangesResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopDatabasesResources">sqlInsightsTopDatabasesResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlByInsightsResources">sqlInsightsTopSqlByInsightsResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlResources">sqlInsightsTopSqlResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityPlanningResourcesInput`<sup>Optional</sup> <a name="capacityPlanningResourcesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.capacityPlanningResourcesInput"></a>

```java
public java.util.List<java.lang.String> getCapacityPlanningResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sqlInsightsFleetAnalysisResourcesInput`<sup>Optional</sup> <a name="sqlInsightsFleetAnalysisResourcesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsFleetAnalysisResourcesInput"></a>

```java
public java.util.List<java.lang.String> getSqlInsightsFleetAnalysisResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sqlInsightsPerformanceDegradationResourcesInput`<sup>Optional</sup> <a name="sqlInsightsPerformanceDegradationResourcesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPerformanceDegradationResourcesInput"></a>

```java
public java.util.List<java.lang.String> getSqlInsightsPerformanceDegradationResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sqlInsightsPlanChangesResourcesInput`<sup>Optional</sup> <a name="sqlInsightsPlanChangesResourcesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPlanChangesResourcesInput"></a>

```java
public java.util.List<java.lang.String> getSqlInsightsPlanChangesResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sqlInsightsTopDatabasesResourcesInput`<sup>Optional</sup> <a name="sqlInsightsTopDatabasesResourcesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopDatabasesResourcesInput"></a>

```java
public java.util.List<java.lang.String> getSqlInsightsTopDatabasesResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sqlInsightsTopSqlByInsightsResourcesInput`<sup>Optional</sup> <a name="sqlInsightsTopSqlByInsightsResourcesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlByInsightsResourcesInput"></a>

```java
public java.util.List<java.lang.String> getSqlInsightsTopSqlByInsightsResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sqlInsightsTopSqlResourcesInput`<sup>Optional</sup> <a name="sqlInsightsTopSqlResourcesInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlResourcesInput"></a>

```java
public java.util.List<java.lang.String> getSqlInsightsTopSqlResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `capacityPlanningResources`<sup>Required</sup> <a name="capacityPlanningResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.capacityPlanningResources"></a>

```java
public java.util.List<java.lang.String> getCapacityPlanningResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sqlInsightsFleetAnalysisResources`<sup>Required</sup> <a name="sqlInsightsFleetAnalysisResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsFleetAnalysisResources"></a>

```java
public java.util.List<java.lang.String> getSqlInsightsFleetAnalysisResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sqlInsightsPerformanceDegradationResources`<sup>Required</sup> <a name="sqlInsightsPerformanceDegradationResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPerformanceDegradationResources"></a>

```java
public java.util.List<java.lang.String> getSqlInsightsPerformanceDegradationResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sqlInsightsPlanChangesResources`<sup>Required</sup> <a name="sqlInsightsPlanChangesResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsPlanChangesResources"></a>

```java
public java.util.List<java.lang.String> getSqlInsightsPlanChangesResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sqlInsightsTopDatabasesResources`<sup>Required</sup> <a name="sqlInsightsTopDatabasesResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopDatabasesResources"></a>

```java
public java.util.List<java.lang.String> getSqlInsightsTopDatabasesResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sqlInsightsTopSqlByInsightsResources`<sup>Required</sup> <a name="sqlInsightsTopSqlByInsightsResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlByInsightsResources"></a>

```java
public java.util.List<java.lang.String> getSqlInsightsTopSqlByInsightsResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sqlInsightsTopSqlResources`<sup>Required</sup> <a name="sqlInsightsTopSqlResources" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.sqlInsightsTopSqlResources"></a>

```java
public java.util.List<java.lang.String> getSqlInsightsTopSqlResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypesOutputReference.property.internalValue"></a>

```java
public OpsiNewsReportContentTypes getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportContentTypes">OpsiNewsReportContentTypes</a>

---


### OpsiNewsReportTimeoutsOutputReference <a name="OpsiNewsReportTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.opsi_news_report.OpsiNewsReportTimeoutsOutputReference;

new OpsiNewsReportTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.opsiNewsReport.OpsiNewsReportTimeouts">OpsiNewsReportTimeouts</a>

---



