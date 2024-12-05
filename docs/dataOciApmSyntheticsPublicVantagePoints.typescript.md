# `dataOciApmSyntheticsPublicVantagePoints` Submodule <a name="`dataOciApmSyntheticsPublicVantagePoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmSyntheticsPublicVantagePoints <a name="DataOciApmSyntheticsPublicVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points oci_apm_synthetics_public_vantage_points}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer"></a>

```typescript
import { dataOciApmSyntheticsPublicVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints(scope: Construct, id: string, config: DataOciApmSyntheticsPublicVantagePointsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig">DataOciApmSyntheticsPublicVantagePointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig">DataOciApmSyntheticsPublicVantagePointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciApmSyntheticsPublicVantagePointsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter">DataOciApmSyntheticsPublicVantagePointsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmSyntheticsPublicVantagePoints resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isConstruct"></a>

```typescript
import { dataOciApmSyntheticsPublicVantagePoints } from 'rhizo-co-terraform-provider-oci'

dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isTerraformElement"></a>

```typescript
import { dataOciApmSyntheticsPublicVantagePoints } from 'rhizo-co-terraform-provider-oci'

dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isTerraformDataSource"></a>

```typescript
import { dataOciApmSyntheticsPublicVantagePoints } from 'rhizo-co-terraform-provider-oci'

dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.generateConfigForImport"></a>

```typescript
import { dataOciApmSyntheticsPublicVantagePoints } from 'rhizo-co-terraform-provider-oci'

dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciApmSyntheticsPublicVantagePoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciApmSyntheticsPublicVantagePoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciApmSyntheticsPublicVantagePoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmSyntheticsPublicVantagePoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList">DataOciApmSyntheticsPublicVantagePointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.publicVantagePointCollection">publicVantagePointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.apmDomainIdInput">apmDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter">DataOciApmSyntheticsPublicVantagePointsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.filter"></a>

```typescript
public readonly filter: DataOciApmSyntheticsPublicVantagePointsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList">DataOciApmSyntheticsPublicVantagePointsFilterList</a>

---

##### `publicVantagePointCollection`<sup>Required</sup> <a name="publicVantagePointCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.publicVantagePointCollection"></a>

```typescript
public readonly publicVantagePointCollection: DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList</a>

---

##### `apmDomainIdInput`<sup>Optional</sup> <a name="apmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.apmDomainIdInput"></a>

```typescript
public readonly apmDomainIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciApmSyntheticsPublicVantagePointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter">DataOciApmSyntheticsPublicVantagePointsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePoints.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmSyntheticsPublicVantagePointsConfig <a name="DataOciApmSyntheticsPublicVantagePointsConfig" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.Initializer"></a>

```typescript
import { dataOciApmSyntheticsPublicVantagePoints } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsPublicVantagePointsConfig: dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#apm_domain_id DataOciApmSyntheticsPublicVantagePoints#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#display_name DataOciApmSyntheticsPublicVantagePoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter">DataOciApmSyntheticsPublicVantagePointsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#id DataOciApmSyntheticsPublicVantagePoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#name DataOciApmSyntheticsPublicVantagePoints#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#apm_domain_id DataOciApmSyntheticsPublicVantagePoints#apm_domain_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#display_name DataOciApmSyntheticsPublicVantagePoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciApmSyntheticsPublicVantagePointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter">DataOciApmSyntheticsPublicVantagePointsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#filter DataOciApmSyntheticsPublicVantagePoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#id DataOciApmSyntheticsPublicVantagePoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#name DataOciApmSyntheticsPublicVantagePoints#name}.

---

### DataOciApmSyntheticsPublicVantagePointsFilter <a name="DataOciApmSyntheticsPublicVantagePointsFilter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter.Initializer"></a>

```typescript
import { dataOciApmSyntheticsPublicVantagePoints } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsPublicVantagePointsFilter: dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#name DataOciApmSyntheticsPublicVantagePoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#values DataOciApmSyntheticsPublicVantagePoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#regex DataOciApmSyntheticsPublicVantagePoints#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#name DataOciApmSyntheticsPublicVantagePoints#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#values DataOciApmSyntheticsPublicVantagePoints#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_public_vantage_points#regex DataOciApmSyntheticsPublicVantagePoints#regex}.

---

### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection.Initializer"></a>

```typescript
import { dataOciApmSyntheticsPublicVantagePoints } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection: dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection = { ... }
```


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems.Initializer"></a>

```typescript
import { dataOciApmSyntheticsPublicVantagePoints } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems: dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems = { ... }
```


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo.Initializer"></a>

```typescript
import { dataOciApmSyntheticsPublicVantagePoints } from 'rhizo-co-terraform-provider-oci'

const dataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo: dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmSyntheticsPublicVantagePointsFilterList <a name="DataOciApmSyntheticsPublicVantagePointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsPublicVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsPublicVantagePointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter">DataOciApmSyntheticsPublicVantagePointsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciApmSyntheticsPublicVantagePointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter">DataOciApmSyntheticsPublicVantagePointsFilter</a>[]

---


### DataOciApmSyntheticsPublicVantagePointsFilterOutputReference <a name="DataOciApmSyntheticsPublicVantagePointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsPublicVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter">DataOciApmSyntheticsPublicVantagePointsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciApmSyntheticsPublicVantagePointsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsFilter">DataOciApmSyntheticsPublicVantagePointsFilter</a>

---


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsPublicVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsPublicVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.adminDivCode">adminDivCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.cityName">cityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.countryName">countryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.latitude">latitude</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.longitude">longitude</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminDivCode`<sup>Required</sup> <a name="adminDivCode" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.adminDivCode"></a>

```typescript
public readonly adminDivCode: string;
```

- *Type:* string

---

##### `cityName`<sup>Required</sup> <a name="cityName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.cityName"></a>

```typescript
public readonly cityName: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `countryName`<sup>Required</sup> <a name="countryName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.countryName"></a>

```typescript
public readonly countryName: string;
```

- *Type:* string

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.latitude"></a>

```typescript
public readonly latitude: number;
```

- *Type:* number

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.longitude"></a>

```typescript
public readonly longitude: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeo</a>

---


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsPublicVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsPublicVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.geo">geo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `geo`<sup>Required</sup> <a name="geo" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.geo"></a>

```typescript
public readonly geo: DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsGeoList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItems</a>

---


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.Initializer"></a>

```typescript
import { dataOciApmSyntheticsPublicVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.get"></a>

```typescript
public get(index: number): DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference <a name="DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciApmSyntheticsPublicVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsPublicVantagePoints.DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection">DataOciApmSyntheticsPublicVantagePointsPublicVantagePointCollection</a>

---



