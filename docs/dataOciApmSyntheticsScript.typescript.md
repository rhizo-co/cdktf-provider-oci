# `dataOciApmSyntheticsScript` Submodule <a name="`dataOciApmSyntheticsScript` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmSyntheticsScript <a name="DataOciApmSyntheticsScript" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_script oci_apm_synthetics_script}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.Initializer"></a>

```typescript
import { dataOciApmSyntheticsScript } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsScript.DataOciApmSyntheticsScript(scope: Construct, id: string, config: DataOciApmSyntheticsScriptConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig">DataOciApmSyntheticsScriptConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig">DataOciApmSyntheticsScriptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmSyntheticsScript resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.isConstruct"></a>

```typescript
import { dataOciApmSyntheticsScript } from 'rhizo-co-terraform-provider-oci'

dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.isTerraformElement"></a>

```typescript
import { dataOciApmSyntheticsScript } from 'rhizo-co-terraform-provider-oci'

dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.isTerraformDataSource"></a>

```typescript
import { dataOciApmSyntheticsScript } from 'rhizo-co-terraform-provider-oci'

dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.generateConfigForImport"></a>

```typescript
import { dataOciApmSyntheticsScript } from 'rhizo-co-terraform-provider-oci'

dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciApmSyntheticsScript resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciApmSyntheticsScript to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciApmSyntheticsScript that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_script#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmSyntheticsScript to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.contentFileName">contentFileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.contentSizeInBytes">contentSizeInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.monitorStatusCountMap">monitorStatusCountMap</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList">DataOciApmSyntheticsScriptMonitorStatusCountMapList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.parameters">parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList">DataOciApmSyntheticsScriptParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.timeUploaded">timeUploaded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.apmDomainIdInput">apmDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.scriptIdInput">scriptIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.scriptId">scriptId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentFileName`<sup>Required</sup> <a name="contentFileName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.contentFileName"></a>

```typescript
public readonly contentFileName: string;
```

- *Type:* string

---

##### `contentSizeInBytes`<sup>Required</sup> <a name="contentSizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.contentSizeInBytes"></a>

```typescript
public readonly contentSizeInBytes: number;
```

- *Type:* number

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `monitorStatusCountMap`<sup>Required</sup> <a name="monitorStatusCountMap" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.monitorStatusCountMap"></a>

```typescript
public readonly monitorStatusCountMap: DataOciApmSyntheticsScriptMonitorStatusCountMapList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList">DataOciApmSyntheticsScriptMonitorStatusCountMapList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.parameters"></a>

```typescript
public readonly parameters: DataOciApmSyntheticsScriptParametersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList">DataOciApmSyntheticsScriptParametersList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `timeUploaded`<sup>Required</sup> <a name="timeUploaded" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.timeUploaded"></a>

```typescript
public readonly timeUploaded: string;
```

- *Type:* string

---

##### `apmDomainIdInput`<sup>Optional</sup> <a name="apmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.apmDomainIdInput"></a>

```typescript
public readonly apmDomainIdInput: string;
```

- *Type:* string

---

##### `scriptIdInput`<sup>Optional</sup> <a name="scriptIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.scriptIdInput"></a>

```typescript
public readonly scriptIdInput: string;
```

- *Type:* string

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

---

##### `scriptId`<sup>Required</sup> <a name="scriptId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.scriptId"></a>

```typescript
public readonly scriptId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScript.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmSyntheticsScriptConfig <a name="DataOciApmSyntheticsScriptConfig" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig.Initializer"></a>

```typescript
import { dataOciApmSyntheticsScript } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsScriptConfig: dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_script#apm_domain_id DataOciApmSyntheticsScript#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig.property.scriptId">scriptId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_script#script_id DataOciApmSyntheticsScript#script_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_script#apm_domain_id DataOciApmSyntheticsScript#apm_domain_id}.

---

##### `scriptId`<sup>Required</sup> <a name="scriptId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptConfig.property.scriptId"></a>

```typescript
public readonly scriptId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_script#script_id DataOciApmSyntheticsScript#script_id}.

---

### DataOciApmSyntheticsScriptMonitorStatusCountMap <a name="DataOciApmSyntheticsScriptMonitorStatusCountMap" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMap"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMap.Initializer"></a>

```typescript
import { dataOciApmSyntheticsScript } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsScriptMonitorStatusCountMap: dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMap = { ... }
```


### DataOciApmSyntheticsScriptParameters <a name="DataOciApmSyntheticsScriptParameters" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParameters.Initializer"></a>

```typescript
import { dataOciApmSyntheticsScript } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsScriptParameters: dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParameters = { ... }
```


### DataOciApmSyntheticsScriptParametersScriptParameter <a name="DataOciApmSyntheticsScriptParametersScriptParameter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameter.Initializer"></a>

```typescript
import { dataOciApmSyntheticsScript } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsScriptParametersScriptParameter: dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameter = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmSyntheticsScriptMonitorStatusCountMapList <a name="DataOciApmSyntheticsScriptMonitorStatusCountMapList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsScript } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference <a name="DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsScript } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.property.disabled">disabled</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.property.enabled">enabled</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.property.invalid">invalid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.property.total">total</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMap">DataOciApmSyntheticsScriptMonitorStatusCountMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.property.disabled"></a>

```typescript
public readonly disabled: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.property.enabled"></a>

```typescript
public readonly enabled: number;
```

- *Type:* number

---

##### `invalid`<sup>Required</sup> <a name="invalid" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.property.invalid"></a>

```typescript
public readonly invalid: number;
```

- *Type:* number

---

##### `total`<sup>Required</sup> <a name="total" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.property.total"></a>

```typescript
public readonly total: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsScriptMonitorStatusCountMap;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptMonitorStatusCountMap">DataOciApmSyntheticsScriptMonitorStatusCountMap</a>

---


### DataOciApmSyntheticsScriptParametersList <a name="DataOciApmSyntheticsScriptParametersList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsScript } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsScriptParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsScriptParametersOutputReference <a name="DataOciApmSyntheticsScriptParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsScript } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.property.isOverwritten">isOverwritten</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.property.isSecret">isSecret</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.property.paramName">paramName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.property.paramValue">paramValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.property.scriptParameter">scriptParameter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList">DataOciApmSyntheticsScriptParametersScriptParameterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParameters">DataOciApmSyntheticsScriptParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isOverwritten`<sup>Required</sup> <a name="isOverwritten" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.property.isOverwritten"></a>

```typescript
public readonly isOverwritten: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSecret`<sup>Required</sup> <a name="isSecret" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.property.isSecret"></a>

```typescript
public readonly isSecret: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `paramName`<sup>Required</sup> <a name="paramName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.property.paramName"></a>

```typescript
public readonly paramName: string;
```

- *Type:* string

---

##### `paramValue`<sup>Required</sup> <a name="paramValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.property.paramValue"></a>

```typescript
public readonly paramValue: string;
```

- *Type:* string

---

##### `scriptParameter`<sup>Required</sup> <a name="scriptParameter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.property.scriptParameter"></a>

```typescript
public readonly scriptParameter: DataOciApmSyntheticsScriptParametersScriptParameterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList">DataOciApmSyntheticsScriptParametersScriptParameterList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsScriptParameters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParameters">DataOciApmSyntheticsScriptParameters</a>

---


### DataOciApmSyntheticsScriptParametersScriptParameterList <a name="DataOciApmSyntheticsScriptParametersScriptParameterList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsScript } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsScriptParametersScriptParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsScriptParametersScriptParameterOutputReference <a name="DataOciApmSyntheticsScriptParametersScriptParameterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsScript } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.property.isSecret">isSecret</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.property.paramName">paramName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.property.paramValue">paramValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameter">DataOciApmSyntheticsScriptParametersScriptParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isSecret`<sup>Required</sup> <a name="isSecret" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.property.isSecret"></a>

```typescript
public readonly isSecret: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `paramName`<sup>Required</sup> <a name="paramName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.property.paramName"></a>

```typescript
public readonly paramName: string;
```

- *Type:* string

---

##### `paramValue`<sup>Required</sup> <a name="paramValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.property.paramValue"></a>

```typescript
public readonly paramValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsScriptParametersScriptParameter;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsScript.DataOciApmSyntheticsScriptParametersScriptParameter">DataOciApmSyntheticsScriptParametersScriptParameter</a>

---



