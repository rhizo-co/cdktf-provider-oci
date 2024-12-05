# `objectstorageObject` Submodule <a name="`objectstorageObject` Submodule" id="rhizo-co-terraform-provider-oci.objectstorageObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectstorageObject <a name="ObjectstorageObject" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object oci_objectstorage_object}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object.ObjectstorageObject;

ObjectstorageObject.Builder.create(Construct scope, java.lang.String id)
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
    .bucket(java.lang.String)
    .namespace(java.lang.String)
    .object(java.lang.String)
//  .cacheControl(java.lang.String)
//  .content(java.lang.String)
//  .contentDisposition(java.lang.String)
//  .contentEncoding(java.lang.String)
//  .contentLanguage(java.lang.String)
//  .contentMd5(java.lang.String)
//  .contentType(java.lang.String)
//  .deleteAllObjectVersions(java.lang.Boolean)
//  .deleteAllObjectVersions(IResolvable)
//  .id(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .opcSseKmsKeyId(java.lang.String)
//  .source(java.lang.String)
//  .sourceUriDetails(ObjectstorageObjectSourceUriDetails)
//  .storageTier(java.lang.String)
//  .timeouts(ObjectstorageObjectTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.object">object</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#object ObjectstorageObject#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#cache_control ObjectstorageObject#cache_control}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content ObjectstorageObject#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_disposition ObjectstorageObject#content_disposition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_encoding ObjectstorageObject#content_encoding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_language ObjectstorageObject#content_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.contentMd5">contentMd5</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_md5 ObjectstorageObject#content_md5}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_type ObjectstorageObject#content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.deleteAllObjectVersions">deleteAllObjectVersions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#delete_all_object_versions ObjectstorageObject#delete_all_object_versions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#id ObjectstorageObject#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#metadata ObjectstorageObject#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.opcSseKmsKeyId">opcSseKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#opc_sse_kms_key_id ObjectstorageObject#opc_sse_kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source ObjectstorageObject#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.sourceUriDetails">sourceUriDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a></code> | source_uri_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.storageTier">storageTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#storage_tier ObjectstorageObject#storage_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.object"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#object ObjectstorageObject#object}.

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.cacheControl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#cache_control ObjectstorageObject#cache_control}.

---

##### `content`<sup>Optional</sup> <a name="content" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.content"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content ObjectstorageObject#content}.

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.contentDisposition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_disposition ObjectstorageObject#content_disposition}.

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.contentEncoding"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_encoding ObjectstorageObject#content_encoding}.

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.contentLanguage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_language ObjectstorageObject#content_language}.

---

##### `contentMd5`<sup>Optional</sup> <a name="contentMd5" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.contentMd5"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_md5 ObjectstorageObject#content_md5}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.contentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_type ObjectstorageObject#content_type}.

---

##### `deleteAllObjectVersions`<sup>Optional</sup> <a name="deleteAllObjectVersions" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.deleteAllObjectVersions"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#delete_all_object_versions ObjectstorageObject#delete_all_object_versions}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#id ObjectstorageObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#metadata ObjectstorageObject#metadata}.

---

##### `opcSseKmsKeyId`<sup>Optional</sup> <a name="opcSseKmsKeyId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.opcSseKmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#opc_sse_kms_key_id ObjectstorageObject#opc_sse_kms_key_id}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.source"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source ObjectstorageObject#source}.

---

##### `sourceUriDetails`<sup>Optional</sup> <a name="sourceUriDetails" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.sourceUriDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a>

source_uri_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_uri_details ObjectstorageObject#source_uri_details}

---

##### `storageTier`<sup>Optional</sup> <a name="storageTier" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.storageTier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#storage_tier ObjectstorageObject#storage_tier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#timeouts ObjectstorageObject#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putSourceUriDetails">putSourceUriDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetCacheControl">resetCacheControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentDisposition">resetContentDisposition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentLanguage">resetContentLanguage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentMd5">resetContentMd5</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetDeleteAllObjectVersions">resetDeleteAllObjectVersions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetOpcSseKmsKeyId">resetOpcSseKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetSourceUriDetails">resetSourceUriDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetStorageTier">resetStorageTier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSourceUriDetails` <a name="putSourceUriDetails" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putSourceUriDetails"></a>

```java
public void putSourceUriDetails(ObjectstorageObjectSourceUriDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putSourceUriDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putTimeouts"></a>

```java
public void putTimeouts(ObjectstorageObjectTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a>

---

##### `resetCacheControl` <a name="resetCacheControl" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetCacheControl"></a>

```java
public void resetCacheControl()
```

##### `resetContent` <a name="resetContent" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContent"></a>

```java
public void resetContent()
```

##### `resetContentDisposition` <a name="resetContentDisposition" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentDisposition"></a>

```java
public void resetContentDisposition()
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentEncoding"></a>

```java
public void resetContentEncoding()
```

##### `resetContentLanguage` <a name="resetContentLanguage" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentLanguage"></a>

```java
public void resetContentLanguage()
```

##### `resetContentMd5` <a name="resetContentMd5" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentMd5"></a>

```java
public void resetContentMd5()
```

##### `resetContentType` <a name="resetContentType" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetDeleteAllObjectVersions` <a name="resetDeleteAllObjectVersions" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetDeleteAllObjectVersions"></a>

```java
public void resetDeleteAllObjectVersions()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetId"></a>

```java
public void resetId()
```

##### `resetMetadata` <a name="resetMetadata" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetOpcSseKmsKeyId` <a name="resetOpcSseKmsKeyId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetOpcSseKmsKeyId"></a>

```java
public void resetOpcSseKmsKeyId()
```

##### `resetSource` <a name="resetSource" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetSource"></a>

```java
public void resetSource()
```

##### `resetSourceUriDetails` <a name="resetSourceUriDetails" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetSourceUriDetails"></a>

```java
public void resetSourceUriDetails()
```

##### `resetStorageTier` <a name="resetStorageTier" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetStorageTier"></a>

```java
public void resetStorageTier()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ObjectstorageObject resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object.ObjectstorageObject;

ObjectstorageObject.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object.ObjectstorageObject;

ObjectstorageObject.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object.ObjectstorageObject;

ObjectstorageObject.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object.ObjectstorageObject;

ObjectstorageObject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ObjectstorageObject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ObjectstorageObject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ObjectstorageObject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ObjectstorageObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ObjectstorageObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLength">contentLength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceUriDetails">sourceUriDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference">ObjectstorageObjectSourceUriDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference">ObjectstorageObjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.workRequestId">workRequestId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cacheControlInput">cacheControlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentDispositionInput">contentDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentEncodingInput">contentEncodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLanguageInput">contentLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentMd5Input">contentMd5Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.deleteAllObjectVersionsInput">deleteAllObjectVersionsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.objectInput">objectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.opcSseKmsKeyIdInput">opcSseKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceUriDetailsInput">sourceUriDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.storageTierInput">storageTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentMd5">contentMd5</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.deleteAllObjectVersions">deleteAllObjectVersions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.opcSseKmsKeyId">opcSseKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.storageTier">storageTier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contentLength`<sup>Required</sup> <a name="contentLength" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLength"></a>

```java
public java.lang.String getContentLength();
```

- *Type:* java.lang.String

---

##### `sourceUriDetails`<sup>Required</sup> <a name="sourceUriDetails" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceUriDetails"></a>

```java
public ObjectstorageObjectSourceUriDetailsOutputReference getSourceUriDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference">ObjectstorageObjectSourceUriDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.timeouts"></a>

```java
public ObjectstorageObjectTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference">ObjectstorageObjectTimeoutsOutputReference</a>

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `workRequestId`<sup>Required</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.workRequestId"></a>

```java
public java.lang.String getWorkRequestId();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `cacheControlInput`<sup>Optional</sup> <a name="cacheControlInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cacheControlInput"></a>

```java
public java.lang.String getCacheControlInput();
```

- *Type:* java.lang.String

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentDispositionInput"></a>

```java
public java.lang.String getContentDispositionInput();
```

- *Type:* java.lang.String

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentEncodingInput"></a>

```java
public java.lang.String getContentEncodingInput();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentLanguageInput`<sup>Optional</sup> <a name="contentLanguageInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLanguageInput"></a>

```java
public java.lang.String getContentLanguageInput();
```

- *Type:* java.lang.String

---

##### `contentMd5Input`<sup>Optional</sup> <a name="contentMd5Input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentMd5Input"></a>

```java
public java.lang.String getContentMd5Input();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `deleteAllObjectVersionsInput`<sup>Optional</sup> <a name="deleteAllObjectVersionsInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.deleteAllObjectVersionsInput"></a>

```java
public java.lang.Object getDeleteAllObjectVersionsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.objectInput"></a>

```java
public java.lang.String getObjectInput();
```

- *Type:* java.lang.String

---

##### `opcSseKmsKeyIdInput`<sup>Optional</sup> <a name="opcSseKmsKeyIdInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.opcSseKmsKeyIdInput"></a>

```java
public java.lang.String getOpcSseKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `sourceUriDetailsInput`<sup>Optional</sup> <a name="sourceUriDetailsInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceUriDetailsInput"></a>

```java
public ObjectstorageObjectSourceUriDetails getSourceUriDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a>

---

##### `storageTierInput`<sup>Optional</sup> <a name="storageTierInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.storageTierInput"></a>

```java
public java.lang.String getStorageTierInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cacheControl"></a>

```java
public java.lang.String getCacheControl();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLanguage"></a>

```java
public java.lang.String getContentLanguage();
```

- *Type:* java.lang.String

---

##### `contentMd5`<sup>Required</sup> <a name="contentMd5" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentMd5"></a>

```java
public java.lang.String getContentMd5();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `deleteAllObjectVersions`<sup>Required</sup> <a name="deleteAllObjectVersions" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.deleteAllObjectVersions"></a>

```java
public java.lang.Object getDeleteAllObjectVersions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `opcSseKmsKeyId`<sup>Required</sup> <a name="opcSseKmsKeyId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.opcSseKmsKeyId"></a>

```java
public java.lang.String getOpcSseKmsKeyId();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `storageTier`<sup>Required</sup> <a name="storageTier" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.storageTier"></a>

```java
public java.lang.String getStorageTier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectstorageObjectConfig <a name="ObjectstorageObjectConfig" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object.ObjectstorageObjectConfig;

ObjectstorageObjectConfig.builder()
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
    .bucket(java.lang.String)
    .namespace(java.lang.String)
    .object(java.lang.String)
//  .cacheControl(java.lang.String)
//  .content(java.lang.String)
//  .contentDisposition(java.lang.String)
//  .contentEncoding(java.lang.String)
//  .contentLanguage(java.lang.String)
//  .contentMd5(java.lang.String)
//  .contentType(java.lang.String)
//  .deleteAllObjectVersions(java.lang.Boolean)
//  .deleteAllObjectVersions(IResolvable)
//  .id(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .opcSseKmsKeyId(java.lang.String)
//  .source(java.lang.String)
//  .sourceUriDetails(ObjectstorageObjectSourceUriDetails)
//  .storageTier(java.lang.String)
//  .timeouts(ObjectstorageObjectTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.object">object</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#object ObjectstorageObject#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#cache_control ObjectstorageObject#cache_control}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content ObjectstorageObject#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_disposition ObjectstorageObject#content_disposition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_encoding ObjectstorageObject#content_encoding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_language ObjectstorageObject#content_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentMd5">contentMd5</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_md5 ObjectstorageObject#content_md5}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_type ObjectstorageObject#content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.deleteAllObjectVersions">deleteAllObjectVersions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#delete_all_object_versions ObjectstorageObject#delete_all_object_versions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#id ObjectstorageObject#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#metadata ObjectstorageObject#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.opcSseKmsKeyId">opcSseKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#opc_sse_kms_key_id ObjectstorageObject#opc_sse_kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source ObjectstorageObject#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.sourceUriDetails">sourceUriDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a></code> | source_uri_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.storageTier">storageTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#storage_tier ObjectstorageObject#storage_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#object ObjectstorageObject#object}.

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.cacheControl"></a>

```java
public java.lang.String getCacheControl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#cache_control ObjectstorageObject#cache_control}.

---

##### `content`<sup>Optional</sup> <a name="content" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content ObjectstorageObject#content}.

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_disposition ObjectstorageObject#content_disposition}.

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_encoding ObjectstorageObject#content_encoding}.

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentLanguage"></a>

```java
public java.lang.String getContentLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_language ObjectstorageObject#content_language}.

---

##### `contentMd5`<sup>Optional</sup> <a name="contentMd5" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentMd5"></a>

```java
public java.lang.String getContentMd5();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_md5 ObjectstorageObject#content_md5}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_type ObjectstorageObject#content_type}.

---

##### `deleteAllObjectVersions`<sup>Optional</sup> <a name="deleteAllObjectVersions" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.deleteAllObjectVersions"></a>

```java
public java.lang.Object getDeleteAllObjectVersions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#delete_all_object_versions ObjectstorageObject#delete_all_object_versions}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#id ObjectstorageObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#metadata ObjectstorageObject#metadata}.

---

##### `opcSseKmsKeyId`<sup>Optional</sup> <a name="opcSseKmsKeyId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.opcSseKmsKeyId"></a>

```java
public java.lang.String getOpcSseKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#opc_sse_kms_key_id ObjectstorageObject#opc_sse_kms_key_id}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source ObjectstorageObject#source}.

---

##### `sourceUriDetails`<sup>Optional</sup> <a name="sourceUriDetails" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.sourceUriDetails"></a>

```java
public ObjectstorageObjectSourceUriDetails getSourceUriDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a>

source_uri_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_uri_details ObjectstorageObject#source_uri_details}

---

##### `storageTier`<sup>Optional</sup> <a name="storageTier" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.storageTier"></a>

```java
public java.lang.String getStorageTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#storage_tier ObjectstorageObject#storage_tier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.timeouts"></a>

```java
public ObjectstorageObjectTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#timeouts ObjectstorageObject#timeouts}

---

### ObjectstorageObjectSourceUriDetails <a name="ObjectstorageObjectSourceUriDetails" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object.ObjectstorageObjectSourceUriDetails;

ObjectstorageObjectSourceUriDetails.builder()
    .bucket(java.lang.String)
    .namespace(java.lang.String)
    .object(java.lang.String)
    .region(java.lang.String)
//  .destinationObjectIfMatchEtag(java.lang.String)
//  .destinationObjectIfNoneMatchEtag(java.lang.String)
//  .sourceObjectIfMatchEtag(java.lang.String)
//  .sourceVersionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.object">object</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#object ObjectstorageObject#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#region ObjectstorageObject#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.destinationObjectIfMatchEtag">destinationObjectIfMatchEtag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#destination_object_if_match_etag ObjectstorageObject#destination_object_if_match_etag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.destinationObjectIfNoneMatchEtag">destinationObjectIfNoneMatchEtag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#destination_object_if_none_match_etag ObjectstorageObject#destination_object_if_none_match_etag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.sourceObjectIfMatchEtag">sourceObjectIfMatchEtag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_object_if_match_etag ObjectstorageObject#source_object_if_match_etag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.sourceVersionId">sourceVersionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_version_id ObjectstorageObject#source_version_id}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#object ObjectstorageObject#object}.

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#region ObjectstorageObject#region}.

---

##### `destinationObjectIfMatchEtag`<sup>Optional</sup> <a name="destinationObjectIfMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.destinationObjectIfMatchEtag"></a>

```java
public java.lang.String getDestinationObjectIfMatchEtag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#destination_object_if_match_etag ObjectstorageObject#destination_object_if_match_etag}.

---

##### `destinationObjectIfNoneMatchEtag`<sup>Optional</sup> <a name="destinationObjectIfNoneMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.destinationObjectIfNoneMatchEtag"></a>

```java
public java.lang.String getDestinationObjectIfNoneMatchEtag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#destination_object_if_none_match_etag ObjectstorageObject#destination_object_if_none_match_etag}.

---

##### `sourceObjectIfMatchEtag`<sup>Optional</sup> <a name="sourceObjectIfMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.sourceObjectIfMatchEtag"></a>

```java
public java.lang.String getSourceObjectIfMatchEtag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_object_if_match_etag ObjectstorageObject#source_object_if_match_etag}.

---

##### `sourceVersionId`<sup>Optional</sup> <a name="sourceVersionId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.sourceVersionId"></a>

```java
public java.lang.String getSourceVersionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_version_id ObjectstorageObject#source_version_id}.

---

### ObjectstorageObjectTimeouts <a name="ObjectstorageObjectTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object.ObjectstorageObjectTimeouts;

ObjectstorageObjectTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#create ObjectstorageObject#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#delete ObjectstorageObject#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#update ObjectstorageObject#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#create ObjectstorageObject#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#delete ObjectstorageObject#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#update ObjectstorageObject#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObjectstorageObjectSourceUriDetailsOutputReference <a name="ObjectstorageObjectSourceUriDetailsOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object.ObjectstorageObjectSourceUriDetailsOutputReference;

new ObjectstorageObjectSourceUriDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetDestinationObjectIfMatchEtag">resetDestinationObjectIfMatchEtag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetDestinationObjectIfNoneMatchEtag">resetDestinationObjectIfNoneMatchEtag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetSourceObjectIfMatchEtag">resetSourceObjectIfMatchEtag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetSourceVersionId">resetSourceVersionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationObjectIfMatchEtag` <a name="resetDestinationObjectIfMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetDestinationObjectIfMatchEtag"></a>

```java
public void resetDestinationObjectIfMatchEtag()
```

##### `resetDestinationObjectIfNoneMatchEtag` <a name="resetDestinationObjectIfNoneMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetDestinationObjectIfNoneMatchEtag"></a>

```java
public void resetDestinationObjectIfNoneMatchEtag()
```

##### `resetSourceObjectIfMatchEtag` <a name="resetSourceObjectIfMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetSourceObjectIfMatchEtag"></a>

```java
public void resetSourceObjectIfMatchEtag()
```

##### `resetSourceVersionId` <a name="resetSourceVersionId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetSourceVersionId"></a>

```java
public void resetSourceVersionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfMatchEtagInput">destinationObjectIfMatchEtagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfNoneMatchEtagInput">destinationObjectIfNoneMatchEtagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.objectInput">objectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceObjectIfMatchEtagInput">sourceObjectIfMatchEtagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceVersionIdInput">sourceVersionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfMatchEtag">destinationObjectIfMatchEtag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfNoneMatchEtag">destinationObjectIfNoneMatchEtag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceObjectIfMatchEtag">sourceObjectIfMatchEtag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceVersionId">sourceVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `destinationObjectIfMatchEtagInput`<sup>Optional</sup> <a name="destinationObjectIfMatchEtagInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfMatchEtagInput"></a>

```java
public java.lang.String getDestinationObjectIfMatchEtagInput();
```

- *Type:* java.lang.String

---

##### `destinationObjectIfNoneMatchEtagInput`<sup>Optional</sup> <a name="destinationObjectIfNoneMatchEtagInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfNoneMatchEtagInput"></a>

```java
public java.lang.String getDestinationObjectIfNoneMatchEtagInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.objectInput"></a>

```java
public java.lang.String getObjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `sourceObjectIfMatchEtagInput`<sup>Optional</sup> <a name="sourceObjectIfMatchEtagInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceObjectIfMatchEtagInput"></a>

```java
public java.lang.String getSourceObjectIfMatchEtagInput();
```

- *Type:* java.lang.String

---

##### `sourceVersionIdInput`<sup>Optional</sup> <a name="sourceVersionIdInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceVersionIdInput"></a>

```java
public java.lang.String getSourceVersionIdInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `destinationObjectIfMatchEtag`<sup>Required</sup> <a name="destinationObjectIfMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfMatchEtag"></a>

```java
public java.lang.String getDestinationObjectIfMatchEtag();
```

- *Type:* java.lang.String

---

##### `destinationObjectIfNoneMatchEtag`<sup>Required</sup> <a name="destinationObjectIfNoneMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfNoneMatchEtag"></a>

```java
public java.lang.String getDestinationObjectIfNoneMatchEtag();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `sourceObjectIfMatchEtag`<sup>Required</sup> <a name="sourceObjectIfMatchEtag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceObjectIfMatchEtag"></a>

```java
public java.lang.String getSourceObjectIfMatchEtag();
```

- *Type:* java.lang.String

---

##### `sourceVersionId`<sup>Required</sup> <a name="sourceVersionId" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceVersionId"></a>

```java
public java.lang.String getSourceVersionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.internalValue"></a>

```java
public ObjectstorageObjectSourceUriDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a>

---


### ObjectstorageObjectTimeoutsOutputReference <a name="ObjectstorageObjectTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.objectstorage_object.ObjectstorageObjectTimeoutsOutputReference;

new ObjectstorageObjectTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a>

---



