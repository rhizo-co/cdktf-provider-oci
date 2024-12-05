# `dataOciJmsFleetCryptoAnalysisResult` Submodule <a name="`dataOciJmsFleetCryptoAnalysisResult` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetCryptoAnalysisResult <a name="DataOciJmsFleetCryptoAnalysisResult" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result oci_jms_fleet_crypto_analysis_result}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer"></a>

```typescript
import { dataOciJmsFleetCryptoAnalysisResult } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult(scope: Construct, id: string, config: DataOciJmsFleetCryptoAnalysisResultConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig">DataOciJmsFleetCryptoAnalysisResultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig">DataOciJmsFleetCryptoAnalysisResultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsFleetCryptoAnalysisResult resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isConstruct"></a>

```typescript
import { dataOciJmsFleetCryptoAnalysisResult } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isTerraformElement"></a>

```typescript
import { dataOciJmsFleetCryptoAnalysisResult } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isTerraformDataSource"></a>

```typescript
import { dataOciJmsFleetCryptoAnalysisResult } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.generateConfigForImport"></a>

```typescript
import { dataOciJmsFleetCryptoAnalysisResult } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciJmsFleetCryptoAnalysisResult resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciJmsFleetCryptoAnalysisResult to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciJmsFleetCryptoAnalysisResult that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetCryptoAnalysisResult to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.aggregationMode">aggregationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cryptoRoadmapVersion">cryptoRoadmapVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.findingCount">findingCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.nonCompliantFindingCount">nonCompliantFindingCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.summarizedEventCount">summarizedEventCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeFirstEvent">timeFirstEvent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeLastEvent">timeLastEvent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.totalEventCount">totalEventCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.workRequestId">workRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cryptoAnalysisResultIdInput">cryptoAnalysisResultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.fleetIdInput">fleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cryptoAnalysisResultId">cryptoAnalysisResultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `aggregationMode`<sup>Required</sup> <a name="aggregationMode" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.aggregationMode"></a>

```typescript
public readonly aggregationMode: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `cryptoRoadmapVersion`<sup>Required</sup> <a name="cryptoRoadmapVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cryptoRoadmapVersion"></a>

```typescript
public readonly cryptoRoadmapVersion: string;
```

- *Type:* string

---

##### `findingCount`<sup>Required</sup> <a name="findingCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.findingCount"></a>

```typescript
public readonly findingCount: number;
```

- *Type:* number

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `nonCompliantFindingCount`<sup>Required</sup> <a name="nonCompliantFindingCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.nonCompliantFindingCount"></a>

```typescript
public readonly nonCompliantFindingCount: number;
```

- *Type:* number

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `summarizedEventCount`<sup>Required</sup> <a name="summarizedEventCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.summarizedEventCount"></a>

```typescript
public readonly summarizedEventCount: number;
```

- *Type:* number

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeFirstEvent`<sup>Required</sup> <a name="timeFirstEvent" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeFirstEvent"></a>

```typescript
public readonly timeFirstEvent: string;
```

- *Type:* string

---

##### `timeLastEvent`<sup>Required</sup> <a name="timeLastEvent" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeLastEvent"></a>

```typescript
public readonly timeLastEvent: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `totalEventCount`<sup>Required</sup> <a name="totalEventCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.totalEventCount"></a>

```typescript
public readonly totalEventCount: number;
```

- *Type:* number

---

##### `workRequestId`<sup>Required</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.workRequestId"></a>

```typescript
public readonly workRequestId: string;
```

- *Type:* string

---

##### `cryptoAnalysisResultIdInput`<sup>Optional</sup> <a name="cryptoAnalysisResultIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cryptoAnalysisResultIdInput"></a>

```typescript
public readonly cryptoAnalysisResultIdInput: string;
```

- *Type:* string

---

##### `fleetIdInput`<sup>Optional</sup> <a name="fleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.fleetIdInput"></a>

```typescript
public readonly fleetIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `cryptoAnalysisResultId`<sup>Required</sup> <a name="cryptoAnalysisResultId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.cryptoAnalysisResultId"></a>

```typescript
public readonly cryptoAnalysisResultId: string;
```

- *Type:* string

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResult.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetCryptoAnalysisResultConfig <a name="DataOciJmsFleetCryptoAnalysisResultConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.Initializer"></a>

```typescript
import { dataOciJmsFleetCryptoAnalysisResult } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetCryptoAnalysisResultConfig: dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.cryptoAnalysisResultId">cryptoAnalysisResultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#crypto_analysis_result_id DataOciJmsFleetCryptoAnalysisResult#crypto_analysis_result_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.fleetId">fleetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#fleet_id DataOciJmsFleetCryptoAnalysisResult#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#id DataOciJmsFleetCryptoAnalysisResult#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cryptoAnalysisResultId`<sup>Required</sup> <a name="cryptoAnalysisResultId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.cryptoAnalysisResultId"></a>

```typescript
public readonly cryptoAnalysisResultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#crypto_analysis_result_id DataOciJmsFleetCryptoAnalysisResult#crypto_analysis_result_id}.

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#fleet_id DataOciJmsFleetCryptoAnalysisResult#fleet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResult.DataOciJmsFleetCryptoAnalysisResultConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_result#id DataOciJmsFleetCryptoAnalysisResult#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



