# `dataOciDataSafeSecurityAssessment` Submodule <a name="`dataOciDataSafeSecurityAssessment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityAssessment <a name="DataOciDataSafeSecurityAssessment" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment oci_data_safe_security_assessment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment(scope: Construct, id: string, config: DataOciDataSafeSecurityAssessmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig">DataOciDataSafeSecurityAssessmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig">DataOciDataSafeSecurityAssessmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityAssessment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.isConstruct"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityAssessment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSecurityAssessment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSecurityAssessment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityAssessment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.ignoredAssessmentIds">ignoredAssessmentIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.ignoredTargets">ignoredTargets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.isAssessmentScheduled">isAssessmentScheduled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.isBaseline">isBaseline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.isDeviatedFromBaseline">isDeviatedFromBaseline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.lastComparedBaselineId">lastComparedBaselineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.link">link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.scheduleSecurityAssessmentId">scheduleSecurityAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.statistics">statistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList">DataOciDataSafeSecurityAssessmentStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.targetIds">targetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.targetVersion">targetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.timeLastAssessed">timeLastAssessed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.triggeredBy">triggeredBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.securityAssessmentIdInput">securityAssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.securityAssessmentId">securityAssessmentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoredAssessmentIds`<sup>Required</sup> <a name="ignoredAssessmentIds" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.ignoredAssessmentIds"></a>

```typescript
public readonly ignoredAssessmentIds: string[];
```

- *Type:* string[]

---

##### `ignoredTargets`<sup>Required</sup> <a name="ignoredTargets" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.ignoredTargets"></a>

```typescript
public readonly ignoredTargets: string[];
```

- *Type:* string[]

---

##### `isAssessmentScheduled`<sup>Required</sup> <a name="isAssessmentScheduled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.isAssessmentScheduled"></a>

```typescript
public readonly isAssessmentScheduled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isBaseline`<sup>Required</sup> <a name="isBaseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.isBaseline"></a>

```typescript
public readonly isBaseline: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isDeviatedFromBaseline`<sup>Required</sup> <a name="isDeviatedFromBaseline" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.isDeviatedFromBaseline"></a>

```typescript
public readonly isDeviatedFromBaseline: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastComparedBaselineId`<sup>Required</sup> <a name="lastComparedBaselineId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.lastComparedBaselineId"></a>

```typescript
public readonly lastComparedBaselineId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `link`<sup>Required</sup> <a name="link" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.link"></a>

```typescript
public readonly link: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `scheduleSecurityAssessmentId`<sup>Required</sup> <a name="scheduleSecurityAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.scheduleSecurityAssessmentId"></a>

```typescript
public readonly scheduleSecurityAssessmentId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.statistics"></a>

```typescript
public readonly statistics: DataOciDataSafeSecurityAssessmentStatisticsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList">DataOciDataSafeSecurityAssessmentStatisticsList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastAssessed`<sup>Required</sup> <a name="timeLastAssessed" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.timeLastAssessed"></a>

```typescript
public readonly timeLastAssessed: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `triggeredBy`<sup>Required</sup> <a name="triggeredBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.triggeredBy"></a>

```typescript
public readonly triggeredBy: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `securityAssessmentIdInput`<sup>Optional</sup> <a name="securityAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.securityAssessmentIdInput"></a>

```typescript
public readonly securityAssessmentIdInput: string;
```

- *Type:* string

---

##### `securityAssessmentId`<sup>Required</sup> <a name="securityAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.securityAssessmentId"></a>

```typescript
public readonly securityAssessmentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityAssessmentConfig <a name="DataOciDataSafeSecurityAssessmentConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentConfig: dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.securityAssessmentId">securityAssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment#security_assessment_id DataOciDataSafeSecurityAssessment#security_assessment_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `securityAssessmentId`<sup>Required</sup> <a name="securityAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentConfig.property.securityAssessmentId"></a>

```typescript
public readonly securityAssessmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_assessment#security_assessment_id DataOciDataSafeSecurityAssessment#security_assessment_id}.

---

### DataOciDataSafeSecurityAssessmentStatistics <a name="DataOciDataSafeSecurityAssessmentStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatistics.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentStatistics: dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatistics = { ... }
```


### DataOciDataSafeSecurityAssessmentStatisticsAdvisory <a name="DataOciDataSafeSecurityAssessmentStatisticsAdvisory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisory"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisory.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentStatisticsAdvisory: dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisory = { ... }
```


### DataOciDataSafeSecurityAssessmentStatisticsDeferred <a name="DataOciDataSafeSecurityAssessmentStatisticsDeferred" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferred"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferred.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentStatisticsDeferred: dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferred = { ... }
```


### DataOciDataSafeSecurityAssessmentStatisticsEvaluate <a name="DataOciDataSafeSecurityAssessmentStatisticsEvaluate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluate.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentStatisticsEvaluate: dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluate = { ... }
```


### DataOciDataSafeSecurityAssessmentStatisticsHighRisk <a name="DataOciDataSafeSecurityAssessmentStatisticsHighRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRisk.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentStatisticsHighRisk: dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRisk = { ... }
```


### DataOciDataSafeSecurityAssessmentStatisticsLowRisk <a name="DataOciDataSafeSecurityAssessmentStatisticsLowRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRisk.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentStatisticsLowRisk: dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRisk = { ... }
```


### DataOciDataSafeSecurityAssessmentStatisticsMediumRisk <a name="DataOciDataSafeSecurityAssessmentStatisticsMediumRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRisk"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRisk.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentStatisticsMediumRisk: dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRisk = { ... }
```


### DataOciDataSafeSecurityAssessmentStatisticsPass <a name="DataOciDataSafeSecurityAssessmentStatisticsPass" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPass"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPass.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityAssessmentStatisticsPass: dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPass = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList <a name="DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference <a name="DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.auditingFindingsCount">auditingFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.authorizationControlFindingsCount">authorizationControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.dataEncryptionFindingsCount">dataEncryptionFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.dbConfigurationFindingsCount">dbConfigurationFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.fineGrainedAccessControlFindingsCount">fineGrainedAccessControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.privilegesAndRolesFindingsCount">privilegesAndRolesFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.targetsCount">targetsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.userAccountsFindingsCount">userAccountsFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisory">DataOciDataSafeSecurityAssessmentStatisticsAdvisory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditingFindingsCount`<sup>Required</sup> <a name="auditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.auditingFindingsCount"></a>

```typescript
public readonly auditingFindingsCount: number;
```

- *Type:* number

---

##### `authorizationControlFindingsCount`<sup>Required</sup> <a name="authorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.authorizationControlFindingsCount"></a>

```typescript
public readonly authorizationControlFindingsCount: number;
```

- *Type:* number

---

##### `dataEncryptionFindingsCount`<sup>Required</sup> <a name="dataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.dataEncryptionFindingsCount"></a>

```typescript
public readonly dataEncryptionFindingsCount: number;
```

- *Type:* number

---

##### `dbConfigurationFindingsCount`<sup>Required</sup> <a name="dbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.dbConfigurationFindingsCount"></a>

```typescript
public readonly dbConfigurationFindingsCount: number;
```

- *Type:* number

---

##### `fineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="fineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```typescript
public readonly fineGrainedAccessControlFindingsCount: number;
```

- *Type:* number

---

##### `privilegesAndRolesFindingsCount`<sup>Required</sup> <a name="privilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.privilegesAndRolesFindingsCount"></a>

```typescript
public readonly privilegesAndRolesFindingsCount: number;
```

- *Type:* number

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.targetsCount"></a>

```typescript
public readonly targetsCount: number;
```

- *Type:* number

---

##### `userAccountsFindingsCount`<sup>Required</sup> <a name="userAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.userAccountsFindingsCount"></a>

```typescript
public readonly userAccountsFindingsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentStatisticsAdvisory;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisory">DataOciDataSafeSecurityAssessmentStatisticsAdvisory</a>

---


### DataOciDataSafeSecurityAssessmentStatisticsDeferredList <a name="DataOciDataSafeSecurityAssessmentStatisticsDeferredList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference <a name="DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.auditingFindingsCount">auditingFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.authorizationControlFindingsCount">authorizationControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.dataEncryptionFindingsCount">dataEncryptionFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.dbConfigurationFindingsCount">dbConfigurationFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.fineGrainedAccessControlFindingsCount">fineGrainedAccessControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.privilegesAndRolesFindingsCount">privilegesAndRolesFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.targetsCount">targetsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.userAccountsFindingsCount">userAccountsFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferred">DataOciDataSafeSecurityAssessmentStatisticsDeferred</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditingFindingsCount`<sup>Required</sup> <a name="auditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.auditingFindingsCount"></a>

```typescript
public readonly auditingFindingsCount: number;
```

- *Type:* number

---

##### `authorizationControlFindingsCount`<sup>Required</sup> <a name="authorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.authorizationControlFindingsCount"></a>

```typescript
public readonly authorizationControlFindingsCount: number;
```

- *Type:* number

---

##### `dataEncryptionFindingsCount`<sup>Required</sup> <a name="dataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.dataEncryptionFindingsCount"></a>

```typescript
public readonly dataEncryptionFindingsCount: number;
```

- *Type:* number

---

##### `dbConfigurationFindingsCount`<sup>Required</sup> <a name="dbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.dbConfigurationFindingsCount"></a>

```typescript
public readonly dbConfigurationFindingsCount: number;
```

- *Type:* number

---

##### `fineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="fineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```typescript
public readonly fineGrainedAccessControlFindingsCount: number;
```

- *Type:* number

---

##### `privilegesAndRolesFindingsCount`<sup>Required</sup> <a name="privilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.privilegesAndRolesFindingsCount"></a>

```typescript
public readonly privilegesAndRolesFindingsCount: number;
```

- *Type:* number

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.targetsCount"></a>

```typescript
public readonly targetsCount: number;
```

- *Type:* number

---

##### `userAccountsFindingsCount`<sup>Required</sup> <a name="userAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.userAccountsFindingsCount"></a>

```typescript
public readonly userAccountsFindingsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentStatisticsDeferred;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferred">DataOciDataSafeSecurityAssessmentStatisticsDeferred</a>

---


### DataOciDataSafeSecurityAssessmentStatisticsEvaluateList <a name="DataOciDataSafeSecurityAssessmentStatisticsEvaluateList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference <a name="DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.auditingFindingsCount">auditingFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.authorizationControlFindingsCount">authorizationControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.dataEncryptionFindingsCount">dataEncryptionFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.dbConfigurationFindingsCount">dbConfigurationFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.fineGrainedAccessControlFindingsCount">fineGrainedAccessControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.privilegesAndRolesFindingsCount">privilegesAndRolesFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.targetsCount">targetsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.userAccountsFindingsCount">userAccountsFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluate">DataOciDataSafeSecurityAssessmentStatisticsEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditingFindingsCount`<sup>Required</sup> <a name="auditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.auditingFindingsCount"></a>

```typescript
public readonly auditingFindingsCount: number;
```

- *Type:* number

---

##### `authorizationControlFindingsCount`<sup>Required</sup> <a name="authorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.authorizationControlFindingsCount"></a>

```typescript
public readonly authorizationControlFindingsCount: number;
```

- *Type:* number

---

##### `dataEncryptionFindingsCount`<sup>Required</sup> <a name="dataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.dataEncryptionFindingsCount"></a>

```typescript
public readonly dataEncryptionFindingsCount: number;
```

- *Type:* number

---

##### `dbConfigurationFindingsCount`<sup>Required</sup> <a name="dbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.dbConfigurationFindingsCount"></a>

```typescript
public readonly dbConfigurationFindingsCount: number;
```

- *Type:* number

---

##### `fineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="fineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```typescript
public readonly fineGrainedAccessControlFindingsCount: number;
```

- *Type:* number

---

##### `privilegesAndRolesFindingsCount`<sup>Required</sup> <a name="privilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.privilegesAndRolesFindingsCount"></a>

```typescript
public readonly privilegesAndRolesFindingsCount: number;
```

- *Type:* number

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.targetsCount"></a>

```typescript
public readonly targetsCount: number;
```

- *Type:* number

---

##### `userAccountsFindingsCount`<sup>Required</sup> <a name="userAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.userAccountsFindingsCount"></a>

```typescript
public readonly userAccountsFindingsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentStatisticsEvaluate;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluate">DataOciDataSafeSecurityAssessmentStatisticsEvaluate</a>

---


### DataOciDataSafeSecurityAssessmentStatisticsHighRiskList <a name="DataOciDataSafeSecurityAssessmentStatisticsHighRiskList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference <a name="DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.auditingFindingsCount">auditingFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.authorizationControlFindingsCount">authorizationControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.dataEncryptionFindingsCount">dataEncryptionFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.dbConfigurationFindingsCount">dbConfigurationFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.fineGrainedAccessControlFindingsCount">fineGrainedAccessControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.privilegesAndRolesFindingsCount">privilegesAndRolesFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.targetsCount">targetsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.userAccountsFindingsCount">userAccountsFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRisk">DataOciDataSafeSecurityAssessmentStatisticsHighRisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditingFindingsCount`<sup>Required</sup> <a name="auditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.auditingFindingsCount"></a>

```typescript
public readonly auditingFindingsCount: number;
```

- *Type:* number

---

##### `authorizationControlFindingsCount`<sup>Required</sup> <a name="authorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.authorizationControlFindingsCount"></a>

```typescript
public readonly authorizationControlFindingsCount: number;
```

- *Type:* number

---

##### `dataEncryptionFindingsCount`<sup>Required</sup> <a name="dataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```typescript
public readonly dataEncryptionFindingsCount: number;
```

- *Type:* number

---

##### `dbConfigurationFindingsCount`<sup>Required</sup> <a name="dbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```typescript
public readonly dbConfigurationFindingsCount: number;
```

- *Type:* number

---

##### `fineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="fineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```typescript
public readonly fineGrainedAccessControlFindingsCount: number;
```

- *Type:* number

---

##### `privilegesAndRolesFindingsCount`<sup>Required</sup> <a name="privilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```typescript
public readonly privilegesAndRolesFindingsCount: number;
```

- *Type:* number

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.targetsCount"></a>

```typescript
public readonly targetsCount: number;
```

- *Type:* number

---

##### `userAccountsFindingsCount`<sup>Required</sup> <a name="userAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.userAccountsFindingsCount"></a>

```typescript
public readonly userAccountsFindingsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentStatisticsHighRisk;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRisk">DataOciDataSafeSecurityAssessmentStatisticsHighRisk</a>

---


### DataOciDataSafeSecurityAssessmentStatisticsList <a name="DataOciDataSafeSecurityAssessmentStatisticsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentStatisticsLowRiskList <a name="DataOciDataSafeSecurityAssessmentStatisticsLowRiskList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference <a name="DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.auditingFindingsCount">auditingFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.authorizationControlFindingsCount">authorizationControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.dataEncryptionFindingsCount">dataEncryptionFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.dbConfigurationFindingsCount">dbConfigurationFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.fineGrainedAccessControlFindingsCount">fineGrainedAccessControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.privilegesAndRolesFindingsCount">privilegesAndRolesFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.targetsCount">targetsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.userAccountsFindingsCount">userAccountsFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRisk">DataOciDataSafeSecurityAssessmentStatisticsLowRisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditingFindingsCount`<sup>Required</sup> <a name="auditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.auditingFindingsCount"></a>

```typescript
public readonly auditingFindingsCount: number;
```

- *Type:* number

---

##### `authorizationControlFindingsCount`<sup>Required</sup> <a name="authorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.authorizationControlFindingsCount"></a>

```typescript
public readonly authorizationControlFindingsCount: number;
```

- *Type:* number

---

##### `dataEncryptionFindingsCount`<sup>Required</sup> <a name="dataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```typescript
public readonly dataEncryptionFindingsCount: number;
```

- *Type:* number

---

##### `dbConfigurationFindingsCount`<sup>Required</sup> <a name="dbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```typescript
public readonly dbConfigurationFindingsCount: number;
```

- *Type:* number

---

##### `fineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="fineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```typescript
public readonly fineGrainedAccessControlFindingsCount: number;
```

- *Type:* number

---

##### `privilegesAndRolesFindingsCount`<sup>Required</sup> <a name="privilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```typescript
public readonly privilegesAndRolesFindingsCount: number;
```

- *Type:* number

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.targetsCount"></a>

```typescript
public readonly targetsCount: number;
```

- *Type:* number

---

##### `userAccountsFindingsCount`<sup>Required</sup> <a name="userAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.userAccountsFindingsCount"></a>

```typescript
public readonly userAccountsFindingsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentStatisticsLowRisk;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRisk">DataOciDataSafeSecurityAssessmentStatisticsLowRisk</a>

---


### DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList <a name="DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference <a name="DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.auditingFindingsCount">auditingFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.authorizationControlFindingsCount">authorizationControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.dataEncryptionFindingsCount">dataEncryptionFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.dbConfigurationFindingsCount">dbConfigurationFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.fineGrainedAccessControlFindingsCount">fineGrainedAccessControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.privilegesAndRolesFindingsCount">privilegesAndRolesFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.targetsCount">targetsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.userAccountsFindingsCount">userAccountsFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRisk">DataOciDataSafeSecurityAssessmentStatisticsMediumRisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditingFindingsCount`<sup>Required</sup> <a name="auditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.auditingFindingsCount"></a>

```typescript
public readonly auditingFindingsCount: number;
```

- *Type:* number

---

##### `authorizationControlFindingsCount`<sup>Required</sup> <a name="authorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.authorizationControlFindingsCount"></a>

```typescript
public readonly authorizationControlFindingsCount: number;
```

- *Type:* number

---

##### `dataEncryptionFindingsCount`<sup>Required</sup> <a name="dataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.dataEncryptionFindingsCount"></a>

```typescript
public readonly dataEncryptionFindingsCount: number;
```

- *Type:* number

---

##### `dbConfigurationFindingsCount`<sup>Required</sup> <a name="dbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.dbConfigurationFindingsCount"></a>

```typescript
public readonly dbConfigurationFindingsCount: number;
```

- *Type:* number

---

##### `fineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="fineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```typescript
public readonly fineGrainedAccessControlFindingsCount: number;
```

- *Type:* number

---

##### `privilegesAndRolesFindingsCount`<sup>Required</sup> <a name="privilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.privilegesAndRolesFindingsCount"></a>

```typescript
public readonly privilegesAndRolesFindingsCount: number;
```

- *Type:* number

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.targetsCount"></a>

```typescript
public readonly targetsCount: number;
```

- *Type:* number

---

##### `userAccountsFindingsCount`<sup>Required</sup> <a name="userAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.userAccountsFindingsCount"></a>

```typescript
public readonly userAccountsFindingsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentStatisticsMediumRisk;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRisk">DataOciDataSafeSecurityAssessmentStatisticsMediumRisk</a>

---


### DataOciDataSafeSecurityAssessmentStatisticsOutputReference <a name="DataOciDataSafeSecurityAssessmentStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.advisory">advisory</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList">DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.deferred">deferred</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList">DataOciDataSafeSecurityAssessmentStatisticsDeferredList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList">DataOciDataSafeSecurityAssessmentStatisticsEvaluateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.highRisk">highRisk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList">DataOciDataSafeSecurityAssessmentStatisticsHighRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.lowRisk">lowRisk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList">DataOciDataSafeSecurityAssessmentStatisticsLowRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.mediumRisk">mediumRisk</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList">DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.pass">pass</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList">DataOciDataSafeSecurityAssessmentStatisticsPassList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.targetsCount">targetsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatistics">DataOciDataSafeSecurityAssessmentStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advisory`<sup>Required</sup> <a name="advisory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.advisory"></a>

```typescript
public readonly advisory: DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList">DataOciDataSafeSecurityAssessmentStatisticsAdvisoryList</a>

---

##### `deferred`<sup>Required</sup> <a name="deferred" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.deferred"></a>

```typescript
public readonly deferred: DataOciDataSafeSecurityAssessmentStatisticsDeferredList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsDeferredList">DataOciDataSafeSecurityAssessmentStatisticsDeferredList</a>

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.evaluate"></a>

```typescript
public readonly evaluate: DataOciDataSafeSecurityAssessmentStatisticsEvaluateList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsEvaluateList">DataOciDataSafeSecurityAssessmentStatisticsEvaluateList</a>

---

##### `highRisk`<sup>Required</sup> <a name="highRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.highRisk"></a>

```typescript
public readonly highRisk: DataOciDataSafeSecurityAssessmentStatisticsHighRiskList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsHighRiskList">DataOciDataSafeSecurityAssessmentStatisticsHighRiskList</a>

---

##### `lowRisk`<sup>Required</sup> <a name="lowRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.lowRisk"></a>

```typescript
public readonly lowRisk: DataOciDataSafeSecurityAssessmentStatisticsLowRiskList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsLowRiskList">DataOciDataSafeSecurityAssessmentStatisticsLowRiskList</a>

---

##### `mediumRisk`<sup>Required</sup> <a name="mediumRisk" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.mediumRisk"></a>

```typescript
public readonly mediumRisk: DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList">DataOciDataSafeSecurityAssessmentStatisticsMediumRiskList</a>

---

##### `pass`<sup>Required</sup> <a name="pass" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.pass"></a>

```typescript
public readonly pass: DataOciDataSafeSecurityAssessmentStatisticsPassList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList">DataOciDataSafeSecurityAssessmentStatisticsPassList</a>

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.targetsCount"></a>

```typescript
public readonly targetsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentStatistics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatistics">DataOciDataSafeSecurityAssessmentStatistics</a>

---


### DataOciDataSafeSecurityAssessmentStatisticsPassList <a name="DataOciDataSafeSecurityAssessmentStatisticsPassList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference <a name="DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityAssessment } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.auditingFindingsCount">auditingFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.authorizationControlFindingsCount">authorizationControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.dataEncryptionFindingsCount">dataEncryptionFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.dbConfigurationFindingsCount">dbConfigurationFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.fineGrainedAccessControlFindingsCount">fineGrainedAccessControlFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.privilegesAndRolesFindingsCount">privilegesAndRolesFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.targetsCount">targetsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.userAccountsFindingsCount">userAccountsFindingsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPass">DataOciDataSafeSecurityAssessmentStatisticsPass</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditingFindingsCount`<sup>Required</sup> <a name="auditingFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.auditingFindingsCount"></a>

```typescript
public readonly auditingFindingsCount: number;
```

- *Type:* number

---

##### `authorizationControlFindingsCount`<sup>Required</sup> <a name="authorizationControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.authorizationControlFindingsCount"></a>

```typescript
public readonly authorizationControlFindingsCount: number;
```

- *Type:* number

---

##### `dataEncryptionFindingsCount`<sup>Required</sup> <a name="dataEncryptionFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.dataEncryptionFindingsCount"></a>

```typescript
public readonly dataEncryptionFindingsCount: number;
```

- *Type:* number

---

##### `dbConfigurationFindingsCount`<sup>Required</sup> <a name="dbConfigurationFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.dbConfigurationFindingsCount"></a>

```typescript
public readonly dbConfigurationFindingsCount: number;
```

- *Type:* number

---

##### `fineGrainedAccessControlFindingsCount`<sup>Required</sup> <a name="fineGrainedAccessControlFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.fineGrainedAccessControlFindingsCount"></a>

```typescript
public readonly fineGrainedAccessControlFindingsCount: number;
```

- *Type:* number

---

##### `privilegesAndRolesFindingsCount`<sup>Required</sup> <a name="privilegesAndRolesFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.privilegesAndRolesFindingsCount"></a>

```typescript
public readonly privilegesAndRolesFindingsCount: number;
```

- *Type:* number

---

##### `targetsCount`<sup>Required</sup> <a name="targetsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.targetsCount"></a>

```typescript
public readonly targetsCount: number;
```

- *Type:* number

---

##### `userAccountsFindingsCount`<sup>Required</sup> <a name="userAccountsFindingsCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.userAccountsFindingsCount"></a>

```typescript
public readonly userAccountsFindingsCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPassOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityAssessmentStatisticsPass;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityAssessment.DataOciDataSafeSecurityAssessmentStatisticsPass">DataOciDataSafeSecurityAssessmentStatisticsPass</a>

---



