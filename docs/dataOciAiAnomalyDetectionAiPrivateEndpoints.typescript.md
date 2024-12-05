# `dataOciAiAnomalyDetectionAiPrivateEndpoints` Submodule <a name="`dataOciAiAnomalyDetectionAiPrivateEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAiAnomalyDetectionAiPrivateEndpoints <a name="DataOciAiAnomalyDetectionAiPrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints oci_ai_anomaly_detection_ai_private_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionAiPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints(scope: Construct, id: string, config: DataOciAiAnomalyDetectionAiPrivateEndpointsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig">DataOciAiAnomalyDetectionAiPrivateEndpointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig">DataOciAiAnomalyDetectionAiPrivateEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciAiAnomalyDetectionAiPrivateEndpointsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter">DataOciAiAnomalyDetectionAiPrivateEndpointsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAiAnomalyDetectionAiPrivateEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.isConstruct"></a>

```typescript
import { dataOciAiAnomalyDetectionAiPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.isTerraformElement"></a>

```typescript
import { dataOciAiAnomalyDetectionAiPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.isTerraformDataSource"></a>

```typescript
import { dataOciAiAnomalyDetectionAiPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.generateConfigForImport"></a>

```typescript
import { dataOciAiAnomalyDetectionAiPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciAiAnomalyDetectionAiPrivateEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAiAnomalyDetectionAiPrivateEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAiAnomalyDetectionAiPrivateEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAiAnomalyDetectionAiPrivateEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.aiPrivateEndpointCollection">aiPrivateEndpointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList">DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList">DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter">DataOciAiAnomalyDetectionAiPrivateEndpointsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `aiPrivateEndpointCollection`<sup>Required</sup> <a name="aiPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.aiPrivateEndpointCollection"></a>

```typescript
public readonly aiPrivateEndpointCollection: DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList">DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.filter"></a>

```typescript
public readonly filter: DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList">DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciAiAnomalyDetectionAiPrivateEndpointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter">DataOciAiAnomalyDetectionAiPrivateEndpointsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpoints.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollection <a name="DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollection.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionAiPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollection: dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollection = { ... }
```


### DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItems <a name="DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItems.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionAiPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItems: dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItems = { ... }
```


### DataOciAiAnomalyDetectionAiPrivateEndpointsConfig <a name="DataOciAiAnomalyDetectionAiPrivateEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionAiPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionAiPrivateEndpointsConfig: dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#compartment_id DataOciAiAnomalyDetectionAiPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#display_name DataOciAiAnomalyDetectionAiPrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter">DataOciAiAnomalyDetectionAiPrivateEndpointsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#id DataOciAiAnomalyDetectionAiPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#state DataOciAiAnomalyDetectionAiPrivateEndpoints#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#compartment_id DataOciAiAnomalyDetectionAiPrivateEndpoints#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#display_name DataOciAiAnomalyDetectionAiPrivateEndpoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciAiAnomalyDetectionAiPrivateEndpointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter">DataOciAiAnomalyDetectionAiPrivateEndpointsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#filter DataOciAiAnomalyDetectionAiPrivateEndpoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#id DataOciAiAnomalyDetectionAiPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#state DataOciAiAnomalyDetectionAiPrivateEndpoints#state}.

---

### DataOciAiAnomalyDetectionAiPrivateEndpointsFilter <a name="DataOciAiAnomalyDetectionAiPrivateEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionAiPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciAiAnomalyDetectionAiPrivateEndpointsFilter: dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#name DataOciAiAnomalyDetectionAiPrivateEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#values DataOciAiAnomalyDetectionAiPrivateEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#regex DataOciAiAnomalyDetectionAiPrivateEndpoints#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#name DataOciAiAnomalyDetectionAiPrivateEndpoints#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#values DataOciAiAnomalyDetectionAiPrivateEndpoints#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_ai_private_endpoints#regex DataOciAiAnomalyDetectionAiPrivateEndpoints#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList <a name="DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionAiPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference <a name="DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionAiPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.attachedDataAssets">attachedDataAssets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.dnsZones">dnsZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItems">DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachedDataAssets`<sup>Required</sup> <a name="attachedDataAssets" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.attachedDataAssets"></a>

```typescript
public readonly attachedDataAssets: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `dnsZones`<sup>Required</sup> <a name="dnsZones" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.dnsZones"></a>

```typescript
public readonly dnsZones: string[];
```

- *Type:* string[]

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItems">DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItems</a>

---


### DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList <a name="DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionAiPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference <a name="DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionAiPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList">DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollection">DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList">DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollection">DataOciAiAnomalyDetectionAiPrivateEndpointsAiPrivateEndpointCollection</a>

---


### DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList <a name="DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionAiPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.get"></a>

```typescript
public get(index: number): DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter">DataOciAiAnomalyDetectionAiPrivateEndpointsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciAiAnomalyDetectionAiPrivateEndpointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter">DataOciAiAnomalyDetectionAiPrivateEndpointsFilter</a>[]

---


### DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference <a name="DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciAiAnomalyDetectionAiPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter">DataOciAiAnomalyDetectionAiPrivateEndpointsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciAiAnomalyDetectionAiPrivateEndpointsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionAiPrivateEndpoints.DataOciAiAnomalyDetectionAiPrivateEndpointsFilter">DataOciAiAnomalyDetectionAiPrivateEndpointsFilter</a>

---



