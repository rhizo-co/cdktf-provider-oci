# `dataOciObjectstorageObject` Submodule <a name="`dataOciObjectstorageObject` Submodule" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciObjectstorageObject <a name="DataOciObjectstorageObject" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object oci_objectstorage_object}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_object.DataOciObjectstorageObject;

DataOciObjectstorageObject.Builder.create(Construct scope, java.lang.String id)
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
//  .base64EncodeContent(java.lang.Boolean)
//  .base64EncodeContent(IResolvable)
//  .contentLengthLimit(java.lang.Number)
//  .httpResponseCacheControl(java.lang.String)
//  .httpResponseContentDisposition(java.lang.String)
//  .httpResponseContentEncoding(java.lang.String)
//  .httpResponseContentLanguage(java.lang.String)
//  .httpResponseContentType(java.lang.String)
//  .httpResponseExpires(java.lang.String)
//  .id(java.lang.String)
//  .versionId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#bucket DataOciObjectstorageObject#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#namespace DataOciObjectstorageObject#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.object">object</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#object DataOciObjectstorageObject#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.base64EncodeContent">base64EncodeContent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#base64_encode_content DataOciObjectstorageObject#base64_encode_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.contentLengthLimit">contentLengthLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#content_length_limit DataOciObjectstorageObject#content_length_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseCacheControl">httpResponseCacheControl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_cache_control DataOciObjectstorageObject#http_response_cache_control}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseContentDisposition">httpResponseContentDisposition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_disposition DataOciObjectstorageObject#http_response_content_disposition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseContentEncoding">httpResponseContentEncoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_encoding DataOciObjectstorageObject#http_response_content_encoding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseContentLanguage">httpResponseContentLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_language DataOciObjectstorageObject#http_response_content_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseContentType">httpResponseContentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_type DataOciObjectstorageObject#http_response_content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseExpires">httpResponseExpires</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_expires DataOciObjectstorageObject#http_response_expires}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#id DataOciObjectstorageObject#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.versionId">versionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#version_id DataOciObjectstorageObject#version_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#bucket DataOciObjectstorageObject#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#namespace DataOciObjectstorageObject#namespace}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.object"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#object DataOciObjectstorageObject#object}.

---

##### `base64EncodeContent`<sup>Optional</sup> <a name="base64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.base64EncodeContent"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#base64_encode_content DataOciObjectstorageObject#base64_encode_content}.

---

##### `contentLengthLimit`<sup>Optional</sup> <a name="contentLengthLimit" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.contentLengthLimit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#content_length_limit DataOciObjectstorageObject#content_length_limit}.

---

##### `httpResponseCacheControl`<sup>Optional</sup> <a name="httpResponseCacheControl" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseCacheControl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_cache_control DataOciObjectstorageObject#http_response_cache_control}.

---

##### `httpResponseContentDisposition`<sup>Optional</sup> <a name="httpResponseContentDisposition" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseContentDisposition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_disposition DataOciObjectstorageObject#http_response_content_disposition}.

---

##### `httpResponseContentEncoding`<sup>Optional</sup> <a name="httpResponseContentEncoding" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseContentEncoding"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_encoding DataOciObjectstorageObject#http_response_content_encoding}.

---

##### `httpResponseContentLanguage`<sup>Optional</sup> <a name="httpResponseContentLanguage" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseContentLanguage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_language DataOciObjectstorageObject#http_response_content_language}.

---

##### `httpResponseContentType`<sup>Optional</sup> <a name="httpResponseContentType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseContentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_type DataOciObjectstorageObject#http_response_content_type}.

---

##### `httpResponseExpires`<sup>Optional</sup> <a name="httpResponseExpires" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseExpires"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_expires DataOciObjectstorageObject#http_response_expires}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#id DataOciObjectstorageObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.versionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#version_id DataOciObjectstorageObject#version_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetBase64EncodeContent">resetBase64EncodeContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetContentLengthLimit">resetContentLengthLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseCacheControl">resetHttpResponseCacheControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentDisposition">resetHttpResponseContentDisposition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentEncoding">resetHttpResponseContentEncoding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentLanguage">resetHttpResponseContentLanguage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentType">resetHttpResponseContentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseExpires">resetHttpResponseExpires</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetVersionId">resetVersionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBase64EncodeContent` <a name="resetBase64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetBase64EncodeContent"></a>

```java
public void resetBase64EncodeContent()
```

##### `resetContentLengthLimit` <a name="resetContentLengthLimit" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetContentLengthLimit"></a>

```java
public void resetContentLengthLimit()
```

##### `resetHttpResponseCacheControl` <a name="resetHttpResponseCacheControl" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseCacheControl"></a>

```java
public void resetHttpResponseCacheControl()
```

##### `resetHttpResponseContentDisposition` <a name="resetHttpResponseContentDisposition" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentDisposition"></a>

```java
public void resetHttpResponseContentDisposition()
```

##### `resetHttpResponseContentEncoding` <a name="resetHttpResponseContentEncoding" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentEncoding"></a>

```java
public void resetHttpResponseContentEncoding()
```

##### `resetHttpResponseContentLanguage` <a name="resetHttpResponseContentLanguage" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentLanguage"></a>

```java
public void resetHttpResponseContentLanguage()
```

##### `resetHttpResponseContentType` <a name="resetHttpResponseContentType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentType"></a>

```java
public void resetHttpResponseContentType()
```

##### `resetHttpResponseExpires` <a name="resetHttpResponseExpires" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseExpires"></a>

```java
public void resetHttpResponseExpires()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetId"></a>

```java
public void resetId()
```

##### `resetVersionId` <a name="resetVersionId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetVersionId"></a>

```java
public void resetVersionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciObjectstorageObject resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_object.DataOciObjectstorageObject;

DataOciObjectstorageObject.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_object.DataOciObjectstorageObject;

DataOciObjectstorageObject.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_object.DataOciObjectstorageObject;

DataOciObjectstorageObject.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_object.DataOciObjectstorageObject;

DataOciObjectstorageObject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciObjectstorageObject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciObjectstorageObject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciObjectstorageObject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciObjectstorageObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciObjectstorageObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLength">contentLength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentMd5">contentMd5</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.storageTier">storageTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.base64EncodeContentInput">base64EncodeContentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLengthLimitInput">contentLengthLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseCacheControlInput">httpResponseCacheControlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentDispositionInput">httpResponseContentDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentEncodingInput">httpResponseContentEncodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentLanguageInput">httpResponseContentLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentTypeInput">httpResponseContentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseExpiresInput">httpResponseExpiresInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.objectInput">objectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.versionIdInput">versionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.base64EncodeContent">base64EncodeContent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLengthLimit">contentLengthLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseCacheControl">httpResponseCacheControl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentDisposition">httpResponseContentDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentEncoding">httpResponseContentEncoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentLanguage">httpResponseContentLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentType">httpResponseContentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseExpires">httpResponseExpires</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.cacheControl"></a>

```java
public java.lang.String getCacheControl();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLanguage"></a>

```java
public java.lang.String getContentLanguage();
```

- *Type:* java.lang.String

---

##### `contentLength`<sup>Required</sup> <a name="contentLength" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLength"></a>

```java
public java.lang.String getContentLength();
```

- *Type:* java.lang.String

---

##### `contentMd5`<sup>Required</sup> <a name="contentMd5" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentMd5"></a>

```java
public java.lang.String getContentMd5();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `storageTier`<sup>Required</sup> <a name="storageTier" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.storageTier"></a>

```java
public java.lang.String getStorageTier();
```

- *Type:* java.lang.String

---

##### `base64EncodeContentInput`<sup>Optional</sup> <a name="base64EncodeContentInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.base64EncodeContentInput"></a>

```java
public java.lang.Object getBase64EncodeContentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `contentLengthLimitInput`<sup>Optional</sup> <a name="contentLengthLimitInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLengthLimitInput"></a>

```java
public java.lang.Number getContentLengthLimitInput();
```

- *Type:* java.lang.Number

---

##### `httpResponseCacheControlInput`<sup>Optional</sup> <a name="httpResponseCacheControlInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseCacheControlInput"></a>

```java
public java.lang.String getHttpResponseCacheControlInput();
```

- *Type:* java.lang.String

---

##### `httpResponseContentDispositionInput`<sup>Optional</sup> <a name="httpResponseContentDispositionInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentDispositionInput"></a>

```java
public java.lang.String getHttpResponseContentDispositionInput();
```

- *Type:* java.lang.String

---

##### `httpResponseContentEncodingInput`<sup>Optional</sup> <a name="httpResponseContentEncodingInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentEncodingInput"></a>

```java
public java.lang.String getHttpResponseContentEncodingInput();
```

- *Type:* java.lang.String

---

##### `httpResponseContentLanguageInput`<sup>Optional</sup> <a name="httpResponseContentLanguageInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentLanguageInput"></a>

```java
public java.lang.String getHttpResponseContentLanguageInput();
```

- *Type:* java.lang.String

---

##### `httpResponseContentTypeInput`<sup>Optional</sup> <a name="httpResponseContentTypeInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentTypeInput"></a>

```java
public java.lang.String getHttpResponseContentTypeInput();
```

- *Type:* java.lang.String

---

##### `httpResponseExpiresInput`<sup>Optional</sup> <a name="httpResponseExpiresInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseExpiresInput"></a>

```java
public java.lang.String getHttpResponseExpiresInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.objectInput"></a>

```java
public java.lang.String getObjectInput();
```

- *Type:* java.lang.String

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.versionIdInput"></a>

```java
public java.lang.String getVersionIdInput();
```

- *Type:* java.lang.String

---

##### `base64EncodeContent`<sup>Required</sup> <a name="base64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.base64EncodeContent"></a>

```java
public java.lang.Object getBase64EncodeContent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `contentLengthLimit`<sup>Required</sup> <a name="contentLengthLimit" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLengthLimit"></a>

```java
public java.lang.Number getContentLengthLimit();
```

- *Type:* java.lang.Number

---

##### `httpResponseCacheControl`<sup>Required</sup> <a name="httpResponseCacheControl" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseCacheControl"></a>

```java
public java.lang.String getHttpResponseCacheControl();
```

- *Type:* java.lang.String

---

##### `httpResponseContentDisposition`<sup>Required</sup> <a name="httpResponseContentDisposition" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentDisposition"></a>

```java
public java.lang.String getHttpResponseContentDisposition();
```

- *Type:* java.lang.String

---

##### `httpResponseContentEncoding`<sup>Required</sup> <a name="httpResponseContentEncoding" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentEncoding"></a>

```java
public java.lang.String getHttpResponseContentEncoding();
```

- *Type:* java.lang.String

---

##### `httpResponseContentLanguage`<sup>Required</sup> <a name="httpResponseContentLanguage" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentLanguage"></a>

```java
public java.lang.String getHttpResponseContentLanguage();
```

- *Type:* java.lang.String

---

##### `httpResponseContentType`<sup>Required</sup> <a name="httpResponseContentType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentType"></a>

```java
public java.lang.String getHttpResponseContentType();
```

- *Type:* java.lang.String

---

##### `httpResponseExpires`<sup>Required</sup> <a name="httpResponseExpires" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseExpires"></a>

```java
public java.lang.String getHttpResponseExpires();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciObjectstorageObjectConfig <a name="DataOciObjectstorageObjectConfig" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_objectstorage_object.DataOciObjectstorageObjectConfig;

DataOciObjectstorageObjectConfig.builder()
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
//  .base64EncodeContent(java.lang.Boolean)
//  .base64EncodeContent(IResolvable)
//  .contentLengthLimit(java.lang.Number)
//  .httpResponseCacheControl(java.lang.String)
//  .httpResponseContentDisposition(java.lang.String)
//  .httpResponseContentEncoding(java.lang.String)
//  .httpResponseContentLanguage(java.lang.String)
//  .httpResponseContentType(java.lang.String)
//  .httpResponseExpires(java.lang.String)
//  .id(java.lang.String)
//  .versionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#bucket DataOciObjectstorageObject#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#namespace DataOciObjectstorageObject#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.object">object</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#object DataOciObjectstorageObject#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.base64EncodeContent">base64EncodeContent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#base64_encode_content DataOciObjectstorageObject#base64_encode_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.contentLengthLimit">contentLengthLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#content_length_limit DataOciObjectstorageObject#content_length_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseCacheControl">httpResponseCacheControl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_cache_control DataOciObjectstorageObject#http_response_cache_control}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentDisposition">httpResponseContentDisposition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_disposition DataOciObjectstorageObject#http_response_content_disposition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentEncoding">httpResponseContentEncoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_encoding DataOciObjectstorageObject#http_response_content_encoding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentLanguage">httpResponseContentLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_language DataOciObjectstorageObject#http_response_content_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentType">httpResponseContentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_type DataOciObjectstorageObject#http_response_content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseExpires">httpResponseExpires</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_expires DataOciObjectstorageObject#http_response_expires}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#id DataOciObjectstorageObject#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.versionId">versionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#version_id DataOciObjectstorageObject#version_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#bucket DataOciObjectstorageObject#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#namespace DataOciObjectstorageObject#namespace}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#object DataOciObjectstorageObject#object}.

---

##### `base64EncodeContent`<sup>Optional</sup> <a name="base64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.base64EncodeContent"></a>

```java
public java.lang.Object getBase64EncodeContent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#base64_encode_content DataOciObjectstorageObject#base64_encode_content}.

---

##### `contentLengthLimit`<sup>Optional</sup> <a name="contentLengthLimit" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.contentLengthLimit"></a>

```java
public java.lang.Number getContentLengthLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#content_length_limit DataOciObjectstorageObject#content_length_limit}.

---

##### `httpResponseCacheControl`<sup>Optional</sup> <a name="httpResponseCacheControl" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseCacheControl"></a>

```java
public java.lang.String getHttpResponseCacheControl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_cache_control DataOciObjectstorageObject#http_response_cache_control}.

---

##### `httpResponseContentDisposition`<sup>Optional</sup> <a name="httpResponseContentDisposition" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentDisposition"></a>

```java
public java.lang.String getHttpResponseContentDisposition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_disposition DataOciObjectstorageObject#http_response_content_disposition}.

---

##### `httpResponseContentEncoding`<sup>Optional</sup> <a name="httpResponseContentEncoding" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentEncoding"></a>

```java
public java.lang.String getHttpResponseContentEncoding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_encoding DataOciObjectstorageObject#http_response_content_encoding}.

---

##### `httpResponseContentLanguage`<sup>Optional</sup> <a name="httpResponseContentLanguage" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentLanguage"></a>

```java
public java.lang.String getHttpResponseContentLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_language DataOciObjectstorageObject#http_response_content_language}.

---

##### `httpResponseContentType`<sup>Optional</sup> <a name="httpResponseContentType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentType"></a>

```java
public java.lang.String getHttpResponseContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_type DataOciObjectstorageObject#http_response_content_type}.

---

##### `httpResponseExpires`<sup>Optional</sup> <a name="httpResponseExpires" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseExpires"></a>

```java
public java.lang.String getHttpResponseExpires();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_expires DataOciObjectstorageObject#http_response_expires}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#id DataOciObjectstorageObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#version_id DataOciObjectstorageObject#version_id}.

---



