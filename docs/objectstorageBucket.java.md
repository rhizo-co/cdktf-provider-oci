# `objectstorageBucket` Submodule <a name="`objectstorageBucket` Submodule" id="rhizo-co-terraform-provider-oci.objectstorageBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectstorageBucket <a name="ObjectstorageBucket" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket oci_objectstorage_bucket}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_bucket.ObjectstorageBucket;

ObjectstorageBucket.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .accessType(java.lang.String)
//  .autoTiering(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .objectEventsEnabled(java.lang.Boolean)
//  .objectEventsEnabled(IResolvable)
//  .retentionRules(IResolvable)
//  .retentionRules(java.util.List<ObjectstorageBucketRetentionRules>)
//  .storageTier(java.lang.String)
//  .timeouts(ObjectstorageBucketTimeouts)
//  .versioning(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#compartment_id ObjectstorageBucket#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#name ObjectstorageBucket#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#namespace ObjectstorageBucket#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.accessType">accessType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#access_type ObjectstorageBucket#access_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.autoTiering">autoTiering</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#auto_tiering ObjectstorageBucket#auto_tiering}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#defined_tags ObjectstorageBucket#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#freeform_tags ObjectstorageBucket#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#id ObjectstorageBucket#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#kms_key_id ObjectstorageBucket#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#metadata ObjectstorageBucket#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.objectEventsEnabled">objectEventsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#object_events_enabled ObjectstorageBucket#object_events_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.retentionRules">retentionRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules">ObjectstorageBucketRetentionRules</a>></code> | retention_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.storageTier">storageTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#storage_tier ObjectstorageBucket#storage_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts">ObjectstorageBucketTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.versioning">versioning</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#versioning ObjectstorageBucket#versioning}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#compartment_id ObjectstorageBucket#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#name ObjectstorageBucket#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#namespace ObjectstorageBucket#namespace}.

---

##### `accessType`<sup>Optional</sup> <a name="accessType" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.accessType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#access_type ObjectstorageBucket#access_type}.

---

##### `autoTiering`<sup>Optional</sup> <a name="autoTiering" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.autoTiering"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#auto_tiering ObjectstorageBucket#auto_tiering}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#defined_tags ObjectstorageBucket#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#freeform_tags ObjectstorageBucket#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#id ObjectstorageBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#kms_key_id ObjectstorageBucket#kms_key_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#metadata ObjectstorageBucket#metadata}.

---

##### `objectEventsEnabled`<sup>Optional</sup> <a name="objectEventsEnabled" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.objectEventsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#object_events_enabled ObjectstorageBucket#object_events_enabled}.

---

##### `retentionRules`<sup>Optional</sup> <a name="retentionRules" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.retentionRules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules">ObjectstorageBucketRetentionRules</a>>

retention_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#retention_rules ObjectstorageBucket#retention_rules}

---

##### `storageTier`<sup>Optional</sup> <a name="storageTier" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.storageTier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#storage_tier ObjectstorageBucket#storage_tier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts">ObjectstorageBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#timeouts ObjectstorageBucket#timeouts}

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.versioning"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#versioning ObjectstorageBucket#versioning}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.putRetentionRules">putRetentionRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetAccessType">resetAccessType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetAutoTiering">resetAutoTiering</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetObjectEventsEnabled">resetObjectEventsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetRetentionRules">resetRetentionRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetStorageTier">resetStorageTier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetVersioning">resetVersioning</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRetentionRules` <a name="putRetentionRules" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.putRetentionRules"></a>

```java
public void putRetentionRules(IResolvable OR java.util.List<ObjectstorageBucketRetentionRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.putRetentionRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules">ObjectstorageBucketRetentionRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.putTimeouts"></a>

```java
public void putTimeouts(ObjectstorageBucketTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts">ObjectstorageBucketTimeouts</a>

---

##### `resetAccessType` <a name="resetAccessType" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetAccessType"></a>

```java
public void resetAccessType()
```

##### `resetAutoTiering` <a name="resetAutoTiering" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetAutoTiering"></a>

```java
public void resetAutoTiering()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetMetadata` <a name="resetMetadata" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetObjectEventsEnabled` <a name="resetObjectEventsEnabled" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetObjectEventsEnabled"></a>

```java
public void resetObjectEventsEnabled()
```

##### `resetRetentionRules` <a name="resetRetentionRules" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetRetentionRules"></a>

```java
public void resetRetentionRules()
```

##### `resetStorageTier` <a name="resetStorageTier" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetStorageTier"></a>

```java
public void resetStorageTier()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersioning` <a name="resetVersioning" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetVersioning"></a>

```java
public void resetVersioning()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ObjectstorageBucket resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_bucket.ObjectstorageBucket;

ObjectstorageBucket.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_bucket.ObjectstorageBucket;

ObjectstorageBucket.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_bucket.ObjectstorageBucket;

ObjectstorageBucket.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_bucket.ObjectstorageBucket;

ObjectstorageBucket.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ObjectstorageBucket.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ObjectstorageBucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ObjectstorageBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ObjectstorageBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ObjectstorageBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.approximateCount">approximateCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.approximateSize">approximateSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.bucketId">bucketId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.isReadOnly">isReadOnly</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.objectLifecyclePolicyEtag">objectLifecyclePolicyEtag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.replicationEnabled">replicationEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.retentionRules">retentionRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList">ObjectstorageBucketRetentionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference">ObjectstorageBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.accessTypeInput">accessTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.autoTieringInput">autoTieringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.objectEventsEnabledInput">objectEventsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.retentionRulesInput">retentionRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules">ObjectstorageBucketRetentionRules</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.storageTierInput">storageTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts">ObjectstorageBucketTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.versioningInput">versioningInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.accessType">accessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.autoTiering">autoTiering</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.objectEventsEnabled">objectEventsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.storageTier">storageTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.versioning">versioning</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `approximateCount`<sup>Required</sup> <a name="approximateCount" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.approximateCount"></a>

```java
public java.lang.String getApproximateCount();
```

- *Type:* java.lang.String

---

##### `approximateSize`<sup>Required</sup> <a name="approximateSize" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.approximateSize"></a>

```java
public java.lang.String getApproximateSize();
```

- *Type:* java.lang.String

---

##### `bucketId`<sup>Required</sup> <a name="bucketId" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.bucketId"></a>

```java
public java.lang.String getBucketId();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `isReadOnly`<sup>Required</sup> <a name="isReadOnly" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.isReadOnly"></a>

```java
public IResolvable getIsReadOnly();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `objectLifecyclePolicyEtag`<sup>Required</sup> <a name="objectLifecyclePolicyEtag" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.objectLifecyclePolicyEtag"></a>

```java
public java.lang.String getObjectLifecyclePolicyEtag();
```

- *Type:* java.lang.String

---

##### `replicationEnabled`<sup>Required</sup> <a name="replicationEnabled" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.replicationEnabled"></a>

```java
public IResolvable getReplicationEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `retentionRules`<sup>Required</sup> <a name="retentionRules" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.retentionRules"></a>

```java
public ObjectstorageBucketRetentionRulesList getRetentionRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList">ObjectstorageBucketRetentionRulesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.timeouts"></a>

```java
public ObjectstorageBucketTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference">ObjectstorageBucketTimeoutsOutputReference</a>

---

##### `accessTypeInput`<sup>Optional</sup> <a name="accessTypeInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.accessTypeInput"></a>

```java
public java.lang.String getAccessTypeInput();
```

- *Type:* java.lang.String

---

##### `autoTieringInput`<sup>Optional</sup> <a name="autoTieringInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.autoTieringInput"></a>

```java
public java.lang.String getAutoTieringInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `objectEventsEnabledInput`<sup>Optional</sup> <a name="objectEventsEnabledInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.objectEventsEnabledInput"></a>

```java
public java.lang.Object getObjectEventsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retentionRulesInput`<sup>Optional</sup> <a name="retentionRulesInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.retentionRulesInput"></a>

```java
public java.lang.Object getRetentionRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules">ObjectstorageBucketRetentionRules</a>>

---

##### `storageTierInput`<sup>Optional</sup> <a name="storageTierInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.storageTierInput"></a>

```java
public java.lang.String getStorageTierInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts">ObjectstorageBucketTimeouts</a>

---

##### `versioningInput`<sup>Optional</sup> <a name="versioningInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.versioningInput"></a>

```java
public java.lang.String getVersioningInput();
```

- *Type:* java.lang.String

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.accessType"></a>

```java
public java.lang.String getAccessType();
```

- *Type:* java.lang.String

---

##### `autoTiering`<sup>Required</sup> <a name="autoTiering" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.autoTiering"></a>

```java
public java.lang.String getAutoTiering();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `objectEventsEnabled`<sup>Required</sup> <a name="objectEventsEnabled" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.objectEventsEnabled"></a>

```java
public java.lang.Object getObjectEventsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageTier`<sup>Required</sup> <a name="storageTier" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.storageTier"></a>

```java
public java.lang.String getStorageTier();
```

- *Type:* java.lang.String

---

##### `versioning`<sup>Required</sup> <a name="versioning" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.versioning"></a>

```java
public java.lang.String getVersioning();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectstorageBucketConfig <a name="ObjectstorageBucketConfig" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_bucket.ObjectstorageBucketConfig;

ObjectstorageBucketConfig.builder()
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
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .accessType(java.lang.String)
//  .autoTiering(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .objectEventsEnabled(java.lang.Boolean)
//  .objectEventsEnabled(IResolvable)
//  .retentionRules(IResolvable)
//  .retentionRules(java.util.List<ObjectstorageBucketRetentionRules>)
//  .storageTier(java.lang.String)
//  .timeouts(ObjectstorageBucketTimeouts)
//  .versioning(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#compartment_id ObjectstorageBucket#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#name ObjectstorageBucket#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#namespace ObjectstorageBucket#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.accessType">accessType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#access_type ObjectstorageBucket#access_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.autoTiering">autoTiering</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#auto_tiering ObjectstorageBucket#auto_tiering}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#defined_tags ObjectstorageBucket#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#freeform_tags ObjectstorageBucket#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#id ObjectstorageBucket#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#kms_key_id ObjectstorageBucket#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#metadata ObjectstorageBucket#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.objectEventsEnabled">objectEventsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#object_events_enabled ObjectstorageBucket#object_events_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.retentionRules">retentionRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules">ObjectstorageBucketRetentionRules</a>></code> | retention_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.storageTier">storageTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#storage_tier ObjectstorageBucket#storage_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts">ObjectstorageBucketTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.versioning">versioning</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#versioning ObjectstorageBucket#versioning}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#compartment_id ObjectstorageBucket#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#name ObjectstorageBucket#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#namespace ObjectstorageBucket#namespace}.

---

##### `accessType`<sup>Optional</sup> <a name="accessType" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.accessType"></a>

```java
public java.lang.String getAccessType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#access_type ObjectstorageBucket#access_type}.

---

##### `autoTiering`<sup>Optional</sup> <a name="autoTiering" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.autoTiering"></a>

```java
public java.lang.String getAutoTiering();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#auto_tiering ObjectstorageBucket#auto_tiering}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#defined_tags ObjectstorageBucket#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#freeform_tags ObjectstorageBucket#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#id ObjectstorageBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#kms_key_id ObjectstorageBucket#kms_key_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#metadata ObjectstorageBucket#metadata}.

---

##### `objectEventsEnabled`<sup>Optional</sup> <a name="objectEventsEnabled" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.objectEventsEnabled"></a>

```java
public java.lang.Object getObjectEventsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#object_events_enabled ObjectstorageBucket#object_events_enabled}.

---

##### `retentionRules`<sup>Optional</sup> <a name="retentionRules" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.retentionRules"></a>

```java
public java.lang.Object getRetentionRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules">ObjectstorageBucketRetentionRules</a>>

retention_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#retention_rules ObjectstorageBucket#retention_rules}

---

##### `storageTier`<sup>Optional</sup> <a name="storageTier" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.storageTier"></a>

```java
public java.lang.String getStorageTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#storage_tier ObjectstorageBucket#storage_tier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.timeouts"></a>

```java
public ObjectstorageBucketTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts">ObjectstorageBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#timeouts ObjectstorageBucket#timeouts}

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.versioning"></a>

```java
public java.lang.String getVersioning();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#versioning ObjectstorageBucket#versioning}.

---

### ObjectstorageBucketRetentionRules <a name="ObjectstorageBucketRetentionRules" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_bucket.ObjectstorageBucketRetentionRules;

ObjectstorageBucketRetentionRules.builder()
    .displayName(java.lang.String)
//  .duration(ObjectstorageBucketRetentionRulesDuration)
//  .timeRuleLocked(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#display_name ObjectstorageBucket#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules.property.duration">duration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration">ObjectstorageBucketRetentionRulesDuration</a></code> | duration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules.property.timeRuleLocked">timeRuleLocked</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#time_rule_locked ObjectstorageBucket#time_rule_locked}. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#display_name ObjectstorageBucket#display_name}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules.property.duration"></a>

```java
public ObjectstorageBucketRetentionRulesDuration getDuration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration">ObjectstorageBucketRetentionRulesDuration</a>

duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#duration ObjectstorageBucket#duration}

---

##### `timeRuleLocked`<sup>Optional</sup> <a name="timeRuleLocked" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules.property.timeRuleLocked"></a>

```java
public java.lang.String getTimeRuleLocked();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#time_rule_locked ObjectstorageBucket#time_rule_locked}.

---

### ObjectstorageBucketRetentionRulesDuration <a name="ObjectstorageBucketRetentionRulesDuration" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_bucket.ObjectstorageBucketRetentionRulesDuration;

ObjectstorageBucketRetentionRulesDuration.builder()
    .timeAmount(java.lang.String)
    .timeUnit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration.property.timeAmount">timeAmount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#time_amount ObjectstorageBucket#time_amount}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration.property.timeUnit">timeUnit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#time_unit ObjectstorageBucket#time_unit}. |

---

##### `timeAmount`<sup>Required</sup> <a name="timeAmount" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration.property.timeAmount"></a>

```java
public java.lang.String getTimeAmount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#time_amount ObjectstorageBucket#time_amount}.

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration.property.timeUnit"></a>

```java
public java.lang.String getTimeUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#time_unit ObjectstorageBucket#time_unit}.

---

### ObjectstorageBucketTimeouts <a name="ObjectstorageBucketTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_bucket.ObjectstorageBucketTimeouts;

ObjectstorageBucketTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#create ObjectstorageBucket#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#delete ObjectstorageBucket#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#update ObjectstorageBucket#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#create ObjectstorageBucket#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#delete ObjectstorageBucket#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#update ObjectstorageBucket#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObjectstorageBucketRetentionRulesDurationOutputReference <a name="ObjectstorageBucketRetentionRulesDurationOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_bucket.ObjectstorageBucketRetentionRulesDurationOutputReference;

new ObjectstorageBucketRetentionRulesDurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.timeAmountInput">timeAmountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.timeUnitInput">timeUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.timeAmount">timeAmount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.timeUnit">timeUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration">ObjectstorageBucketRetentionRulesDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeAmountInput`<sup>Optional</sup> <a name="timeAmountInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.timeAmountInput"></a>

```java
public java.lang.String getTimeAmountInput();
```

- *Type:* java.lang.String

---

##### `timeUnitInput`<sup>Optional</sup> <a name="timeUnitInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.timeUnitInput"></a>

```java
public java.lang.String getTimeUnitInput();
```

- *Type:* java.lang.String

---

##### `timeAmount`<sup>Required</sup> <a name="timeAmount" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.timeAmount"></a>

```java
public java.lang.String getTimeAmount();
```

- *Type:* java.lang.String

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.timeUnit"></a>

```java
public java.lang.String getTimeUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.internalValue"></a>

```java
public ObjectstorageBucketRetentionRulesDuration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration">ObjectstorageBucketRetentionRulesDuration</a>

---


### ObjectstorageBucketRetentionRulesList <a name="ObjectstorageBucketRetentionRulesList" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_bucket.ObjectstorageBucketRetentionRulesList;

new ObjectstorageBucketRetentionRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.get"></a>

```java
public ObjectstorageBucketRetentionRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules">ObjectstorageBucketRetentionRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules">ObjectstorageBucketRetentionRules</a>>

---


### ObjectstorageBucketRetentionRulesOutputReference <a name="ObjectstorageBucketRetentionRulesOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_bucket.ObjectstorageBucketRetentionRulesOutputReference;

new ObjectstorageBucketRetentionRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.putDuration">putDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.resetTimeRuleLocked">resetTimeRuleLocked</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDuration` <a name="putDuration" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.putDuration"></a>

```java
public void putDuration(ObjectstorageBucketRetentionRulesDuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.putDuration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration">ObjectstorageBucketRetentionRulesDuration</a>

---

##### `resetDuration` <a name="resetDuration" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetTimeRuleLocked` <a name="resetTimeRuleLocked" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.resetTimeRuleLocked"></a>

```java
public void resetTimeRuleLocked()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.duration">duration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference">ObjectstorageBucketRetentionRulesDurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.retentionRuleId">retentionRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.timeModified">timeModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.durationInput">durationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration">ObjectstorageBucketRetentionRulesDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.timeRuleLockedInput">timeRuleLockedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.timeRuleLocked">timeRuleLocked</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules">ObjectstorageBucketRetentionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.duration"></a>

```java
public ObjectstorageBucketRetentionRulesDurationOutputReference getDuration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference">ObjectstorageBucketRetentionRulesDurationOutputReference</a>

---

##### `retentionRuleId`<sup>Required</sup> <a name="retentionRuleId" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.retentionRuleId"></a>

```java
public java.lang.String getRetentionRuleId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeModified`<sup>Required</sup> <a name="timeModified" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.timeModified"></a>

```java
public java.lang.String getTimeModified();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.durationInput"></a>

```java
public ObjectstorageBucketRetentionRulesDuration getDurationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration">ObjectstorageBucketRetentionRulesDuration</a>

---

##### `timeRuleLockedInput`<sup>Optional</sup> <a name="timeRuleLockedInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.timeRuleLockedInput"></a>

```java
public java.lang.String getTimeRuleLockedInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `timeRuleLocked`<sup>Required</sup> <a name="timeRuleLocked" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.timeRuleLocked"></a>

```java
public java.lang.String getTimeRuleLocked();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules">ObjectstorageBucketRetentionRules</a>

---


### ObjectstorageBucketTimeoutsOutputReference <a name="ObjectstorageBucketTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_bucket.ObjectstorageBucketTimeoutsOutputReference;

new ObjectstorageBucketTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts">ObjectstorageBucketTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts">ObjectstorageBucketTimeouts</a>

---



