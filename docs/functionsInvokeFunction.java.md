# `functionsInvokeFunction` Submodule <a name="`functionsInvokeFunction` Submodule" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionsInvokeFunction <a name="FunctionsInvokeFunction" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function oci_functions_invoke_function}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.functions_invoke_function.FunctionsInvokeFunction;

FunctionsInvokeFunction.Builder.create(Construct scope, java.lang.String id)
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
    .functionId(java.lang.String)
//  .base64EncodeContent(java.lang.Boolean)
//  .base64EncodeContent(IResolvable)
//  .fnIntent(java.lang.String)
//  .fnInvokeType(java.lang.String)
//  .id(java.lang.String)
//  .inputBodySourcePath(java.lang.String)
//  .invokeFunctionBody(java.lang.String)
//  .invokeFunctionBodyBase64Encoded(java.lang.String)
//  .timeouts(FunctionsInvokeFunctionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.functionId">functionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#function_id FunctionsInvokeFunction#function_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.base64EncodeContent">base64EncodeContent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#base64_encode_content FunctionsInvokeFunction#base64_encode_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.fnIntent">fnIntent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_intent FunctionsInvokeFunction#fn_intent}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.fnInvokeType">fnInvokeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_invoke_type FunctionsInvokeFunction#fn_invoke_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#id FunctionsInvokeFunction#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.inputBodySourcePath">inputBodySourcePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#input_body_source_path FunctionsInvokeFunction#input_body_source_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.invokeFunctionBody">invokeFunctionBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body FunctionsInvokeFunction#invoke_function_body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.invokeFunctionBodyBase64Encoded">invokeFunctionBodyBase64Encoded</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body_base64_encoded FunctionsInvokeFunction#invoke_function_body_base64_encoded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.functionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#function_id FunctionsInvokeFunction#function_id}.

---

##### `base64EncodeContent`<sup>Optional</sup> <a name="base64EncodeContent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.base64EncodeContent"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#base64_encode_content FunctionsInvokeFunction#base64_encode_content}.

---

##### `fnIntent`<sup>Optional</sup> <a name="fnIntent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.fnIntent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_intent FunctionsInvokeFunction#fn_intent}.

---

##### `fnInvokeType`<sup>Optional</sup> <a name="fnInvokeType" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.fnInvokeType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_invoke_type FunctionsInvokeFunction#fn_invoke_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#id FunctionsInvokeFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputBodySourcePath`<sup>Optional</sup> <a name="inputBodySourcePath" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.inputBodySourcePath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#input_body_source_path FunctionsInvokeFunction#input_body_source_path}.

---

##### `invokeFunctionBody`<sup>Optional</sup> <a name="invokeFunctionBody" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.invokeFunctionBody"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body FunctionsInvokeFunction#invoke_function_body}.

---

##### `invokeFunctionBodyBase64Encoded`<sup>Optional</sup> <a name="invokeFunctionBodyBase64Encoded" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.invokeFunctionBodyBase64Encoded"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body_base64_encoded FunctionsInvokeFunction#invoke_function_body_base64_encoded}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#timeouts FunctionsInvokeFunction#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetBase64EncodeContent">resetBase64EncodeContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetFnIntent">resetFnIntent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetFnInvokeType">resetFnInvokeType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInputBodySourcePath">resetInputBodySourcePath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInvokeFunctionBody">resetInvokeFunctionBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInvokeFunctionBodyBase64Encoded">resetInvokeFunctionBodyBase64Encoded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.putTimeouts"></a>

```java
public void putTimeouts(FunctionsInvokeFunctionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a>

---

##### `resetBase64EncodeContent` <a name="resetBase64EncodeContent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetBase64EncodeContent"></a>

```java
public void resetBase64EncodeContent()
```

##### `resetFnIntent` <a name="resetFnIntent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetFnIntent"></a>

```java
public void resetFnIntent()
```

##### `resetFnInvokeType` <a name="resetFnInvokeType" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetFnInvokeType"></a>

```java
public void resetFnInvokeType()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetId"></a>

```java
public void resetId()
```

##### `resetInputBodySourcePath` <a name="resetInputBodySourcePath" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInputBodySourcePath"></a>

```java
public void resetInputBodySourcePath()
```

##### `resetInvokeFunctionBody` <a name="resetInvokeFunctionBody" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInvokeFunctionBody"></a>

```java
public void resetInvokeFunctionBody()
```

##### `resetInvokeFunctionBodyBase64Encoded` <a name="resetInvokeFunctionBodyBase64Encoded" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetInvokeFunctionBodyBase64Encoded"></a>

```java
public void resetInvokeFunctionBodyBase64Encoded()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FunctionsInvokeFunction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.functions_invoke_function.FunctionsInvokeFunction;

FunctionsInvokeFunction.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.functions_invoke_function.FunctionsInvokeFunction;

FunctionsInvokeFunction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.functions_invoke_function.FunctionsInvokeFunction;

FunctionsInvokeFunction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.functions_invoke_function.FunctionsInvokeFunction;

FunctionsInvokeFunction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FunctionsInvokeFunction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FunctionsInvokeFunction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FunctionsInvokeFunction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FunctionsInvokeFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FunctionsInvokeFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeEndpoint">invokeEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference">FunctionsInvokeFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.base64EncodeContentInput">base64EncodeContentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnIntentInput">fnIntentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnInvokeTypeInput">fnInvokeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.functionIdInput">functionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.inputBodySourcePathInput">inputBodySourcePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyBase64EncodedInput">invokeFunctionBodyBase64EncodedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyInput">invokeFunctionBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.base64EncodeContent">base64EncodeContent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnIntent">fnIntent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnInvokeType">fnInvokeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.functionId">functionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.inputBodySourcePath">inputBodySourcePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBody">invokeFunctionBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyBase64Encoded">invokeFunctionBodyBase64Encoded</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `invokeEndpoint`<sup>Required</sup> <a name="invokeEndpoint" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeEndpoint"></a>

```java
public java.lang.String getInvokeEndpoint();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.timeouts"></a>

```java
public FunctionsInvokeFunctionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference">FunctionsInvokeFunctionTimeoutsOutputReference</a>

---

##### `base64EncodeContentInput`<sup>Optional</sup> <a name="base64EncodeContentInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.base64EncodeContentInput"></a>

```java
public java.lang.Object getBase64EncodeContentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fnIntentInput`<sup>Optional</sup> <a name="fnIntentInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnIntentInput"></a>

```java
public java.lang.String getFnIntentInput();
```

- *Type:* java.lang.String

---

##### `fnInvokeTypeInput`<sup>Optional</sup> <a name="fnInvokeTypeInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnInvokeTypeInput"></a>

```java
public java.lang.String getFnInvokeTypeInput();
```

- *Type:* java.lang.String

---

##### `functionIdInput`<sup>Optional</sup> <a name="functionIdInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.functionIdInput"></a>

```java
public java.lang.String getFunctionIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputBodySourcePathInput`<sup>Optional</sup> <a name="inputBodySourcePathInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.inputBodySourcePathInput"></a>

```java
public java.lang.String getInputBodySourcePathInput();
```

- *Type:* java.lang.String

---

##### `invokeFunctionBodyBase64EncodedInput`<sup>Optional</sup> <a name="invokeFunctionBodyBase64EncodedInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyBase64EncodedInput"></a>

```java
public java.lang.String getInvokeFunctionBodyBase64EncodedInput();
```

- *Type:* java.lang.String

---

##### `invokeFunctionBodyInput`<sup>Optional</sup> <a name="invokeFunctionBodyInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyInput"></a>

```java
public java.lang.String getInvokeFunctionBodyInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a>

---

##### `base64EncodeContent`<sup>Required</sup> <a name="base64EncodeContent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.base64EncodeContent"></a>

```java
public java.lang.Object getBase64EncodeContent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fnIntent`<sup>Required</sup> <a name="fnIntent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnIntent"></a>

```java
public java.lang.String getFnIntent();
```

- *Type:* java.lang.String

---

##### `fnInvokeType`<sup>Required</sup> <a name="fnInvokeType" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.fnInvokeType"></a>

```java
public java.lang.String getFnInvokeType();
```

- *Type:* java.lang.String

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inputBodySourcePath`<sup>Required</sup> <a name="inputBodySourcePath" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.inputBodySourcePath"></a>

```java
public java.lang.String getInputBodySourcePath();
```

- *Type:* java.lang.String

---

##### `invokeFunctionBody`<sup>Required</sup> <a name="invokeFunctionBody" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBody"></a>

```java
public java.lang.String getInvokeFunctionBody();
```

- *Type:* java.lang.String

---

##### `invokeFunctionBodyBase64Encoded`<sup>Required</sup> <a name="invokeFunctionBodyBase64Encoded" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.invokeFunctionBodyBase64Encoded"></a>

```java
public java.lang.String getInvokeFunctionBodyBase64Encoded();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionsInvokeFunctionConfig <a name="FunctionsInvokeFunctionConfig" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.functions_invoke_function.FunctionsInvokeFunctionConfig;

FunctionsInvokeFunctionConfig.builder()
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
    .functionId(java.lang.String)
//  .base64EncodeContent(java.lang.Boolean)
//  .base64EncodeContent(IResolvable)
//  .fnIntent(java.lang.String)
//  .fnInvokeType(java.lang.String)
//  .id(java.lang.String)
//  .inputBodySourcePath(java.lang.String)
//  .invokeFunctionBody(java.lang.String)
//  .invokeFunctionBodyBase64Encoded(java.lang.String)
//  .timeouts(FunctionsInvokeFunctionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.functionId">functionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#function_id FunctionsInvokeFunction#function_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.base64EncodeContent">base64EncodeContent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#base64_encode_content FunctionsInvokeFunction#base64_encode_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.fnIntent">fnIntent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_intent FunctionsInvokeFunction#fn_intent}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.fnInvokeType">fnInvokeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_invoke_type FunctionsInvokeFunction#fn_invoke_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#id FunctionsInvokeFunction#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.inputBodySourcePath">inputBodySourcePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#input_body_source_path FunctionsInvokeFunction#input_body_source_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.invokeFunctionBody">invokeFunctionBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body FunctionsInvokeFunction#invoke_function_body}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.invokeFunctionBodyBase64Encoded">invokeFunctionBodyBase64Encoded</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body_base64_encoded FunctionsInvokeFunction#invoke_function_body_base64_encoded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.functionId"></a>

```java
public java.lang.String getFunctionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#function_id FunctionsInvokeFunction#function_id}.

---

##### `base64EncodeContent`<sup>Optional</sup> <a name="base64EncodeContent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.base64EncodeContent"></a>

```java
public java.lang.Object getBase64EncodeContent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#base64_encode_content FunctionsInvokeFunction#base64_encode_content}.

---

##### `fnIntent`<sup>Optional</sup> <a name="fnIntent" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.fnIntent"></a>

```java
public java.lang.String getFnIntent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_intent FunctionsInvokeFunction#fn_intent}.

---

##### `fnInvokeType`<sup>Optional</sup> <a name="fnInvokeType" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.fnInvokeType"></a>

```java
public java.lang.String getFnInvokeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#fn_invoke_type FunctionsInvokeFunction#fn_invoke_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#id FunctionsInvokeFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputBodySourcePath`<sup>Optional</sup> <a name="inputBodySourcePath" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.inputBodySourcePath"></a>

```java
public java.lang.String getInputBodySourcePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#input_body_source_path FunctionsInvokeFunction#input_body_source_path}.

---

##### `invokeFunctionBody`<sup>Optional</sup> <a name="invokeFunctionBody" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.invokeFunctionBody"></a>

```java
public java.lang.String getInvokeFunctionBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body FunctionsInvokeFunction#invoke_function_body}.

---

##### `invokeFunctionBodyBase64Encoded`<sup>Optional</sup> <a name="invokeFunctionBodyBase64Encoded" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.invokeFunctionBodyBase64Encoded"></a>

```java
public java.lang.String getInvokeFunctionBodyBase64Encoded();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#invoke_function_body_base64_encoded FunctionsInvokeFunction#invoke_function_body_base64_encoded}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionConfig.property.timeouts"></a>

```java
public FunctionsInvokeFunctionTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#timeouts FunctionsInvokeFunction#timeouts}

---

### FunctionsInvokeFunctionTimeouts <a name="FunctionsInvokeFunctionTimeouts" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.functions_invoke_function.FunctionsInvokeFunctionTimeouts;

FunctionsInvokeFunctionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#create FunctionsInvokeFunction#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#delete FunctionsInvokeFunction#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#update FunctionsInvokeFunction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#create FunctionsInvokeFunction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#delete FunctionsInvokeFunction#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/functions_invoke_function#update FunctionsInvokeFunction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionsInvokeFunctionTimeoutsOutputReference <a name="FunctionsInvokeFunctionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.functions_invoke_function.FunctionsInvokeFunctionTimeoutsOutputReference;

new FunctionsInvokeFunctionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.functionsInvokeFunction.FunctionsInvokeFunctionTimeouts">FunctionsInvokeFunctionTimeouts</a>

---



